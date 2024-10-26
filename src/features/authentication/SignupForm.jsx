/** @format */

import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import styled from "styled-components";
import Heading from "../../ui/Heading";

function SignupForm() {
  // custom hook for signUP
  const { signup, isLoading } = useSignup();
  // use register function on inputs to give them a name and mange the state
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  //handleSubmit allow us register our custom handle function
  function onsubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        // when finish , reset the form
        onSettled: reset,
      }
    );
  }

  const Container = styled.div`
  // border:1px solid red;
  display: flex;
  flex-direction : column;
  gap : 30px;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  `
  return (
    <Container>

<Heading as="h1">Create a new user</Heading>

    <Form onSubmit={handleSubmit(onsubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          //calling this function create a few props which spread wit this onto this input component
          {...register("fullName", { required: "This field is required" })}
          />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              // form validation : Email regex: /\S+@\S+\.\S+/
              value: /\S+@\S+\.\S+/,
              message: "Please write a valid email address",
            },
          })}
          />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
        >
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required",
            // custom validate fucntion
            // gets the current value of this field and do sth with it
            validate: (value) =>
              value === getValues().password || "Password is not matched",
          })}
          />
      </FormRow>

          <div>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
          </div>
    </Form>
          </Container>
  );
}

export default SignupForm;
