/** @format */

import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import { createEditCabin } from "../../services/apiCabins";
import { useCreateCabin } from "./useCreateCabin";

import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToedit = {}, onCloseModal }) {
  //custom hook for create cabin
  const { isCreating, createCabin } = useCreateCabin();

  // custom hook for editing cabin
  const { isEditing, editCabin } = useEditCabin();

  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = cabinToedit;

  // make sure that we editing not creating
  const isEditSession = Boolean(editId);

  // 1.register inputs in all input field in to this hook
  // 2.specify  the OnSubmit form
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    // GET edited values in to the input
    defaultValues: isEditSession ? editValues : {},
  });
  //read the errors property using formState
  const { errors } = formState;

  function onSubmit(data) {
    // the image is string or object? if string then it is previous image if not , it is new image
    const image = typeof data.image === "string" ? data.image : data.image[0];
    //editing
    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          // for reset
          onSuccess: (data) => {
            reset();

            onCloseModal?.();
          },
        }
      );
    //creating
    else
      createCabin(
        { ...data, image: image },
        {
          // for reset
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    // console.log(errors);
  }
  return (
    // FORM
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      {/* CABIN NAME  */}
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      {/* CABIN MAX CAPACITY  */}
      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      {/* CABIN Regular price */}

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      {/* CABIN Discount */}

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than the regular peice",
          })}
        />
      </FormRow>

      {/* CABIN DESCRIPTION */}
      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      {/* CABIN IMAGE */}
      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit cabin" : "create new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
