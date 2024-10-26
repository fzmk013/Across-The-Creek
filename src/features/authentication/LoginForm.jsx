/** @format */

import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { Login } from "../../services/apiAuth";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { NavLink } from "react-router-dom";

function LoginForm() {
  //2 State for 2 input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // custom hook for login Mutate function
  const { Login, isLoading } = useLogin();

  //for regular form
  function handleSubmit(e) {
    // stops the default action of an element from happening. For example: Prevent a submit button from submitting a form
    e.preventDefault();

    //make sure that the email and password exist
    if (!email || !password) return;

    // else
    Login(
      { email, password },
      {
        // when password or email is wrong then empty the
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          // CONTROL ELEMENTS
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>

        <NavLink to="/users">don't have an account?</NavLink>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
