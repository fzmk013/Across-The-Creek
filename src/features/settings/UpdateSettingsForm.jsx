/** @format */

import { useSearchParams } from "react-router-dom";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  //custom hook for settings data
  const {
    isLoading,
    settings: {
      //teh data that define in supabase setting table
      minBookingLenght,
      maxBookingLenght,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  // custom hook for update the setting
  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  // handle update function
  function handleUpdate(e, field) {
    // e.target.value
    const { value } = e.target;

    if (!value) return;
    // else
    // field could reaplace with whatever we pass in
    updateSetting({ [field]: value });
  }

  return (
    <Form>
      {/* fetch the data and then immediately place it in each input fields  */}
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={minBookingLenght}
          //onblur functon gets the event and the name of the field that should be update
          onBlur={(e) => handleUpdate(e, "minBookingLenght")}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          defaultValue={maxBookingLenght}
          onBlur={(e) => handleUpdate(e, "maxBookingLenght")}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
