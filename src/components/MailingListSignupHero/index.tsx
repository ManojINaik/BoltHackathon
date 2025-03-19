import * as Fathom from "fathom-client";
import React, { FormEvent, useCallback, useMemo, useState } from "react";
import Spinner from "src/components/Spinner";
import { Body, BodyBold } from "src/styles";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import styled from "styled-components";

import { Button } from "../base";
import {
  getResultMessage,
  signupRequest,
  SignUpState,
  validateEmailAddress,
} from "../MailingListSignup/utils";

interface MailingListSignupProps
  extends React.ComponentPropsWithoutRef<"form"> {
  placeholder: string;
  mobilePlaceholder?: string;
}

interface CheckErrorsProps {
  hasErrors: boolean;
}

const MailingListSignup: React.FC<MailingListSignupProps> = ({
  mobilePlaceholder,
  placeholder,
  ...rest
}) => {
  const [email, setEmail] = useState("");
  const [hasErrors, setHasErrors] = useState(false);
  const [signUpState, updateSignUpState] = useState(SignUpState.INITIAL);
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (email === "") {
        updateSignUpState(SignUpState.EMPTY);
        setHasErrors(true);
        return;
      }
      if (validateEmailAddress(email)) {
        updateSignUpState(SignUpState.SUBMITTING);
        signupRequest(email)
          .then(({ alreadySignup }) => {
            if (alreadySignup) {
              updateSignUpState(SignUpState.DUPLICATE);
              setHasErrors(true);
              Fathom.trackEvent("Sign Up: Duplicate"); // Sign Up: Duplicate
            } else {
              updateSignUpState(SignUpState.SUBMITTED);
              Fathom.trackEvent("Sign Up: Success"); // Sign Up: Success
            }
          })
          .catch(() => {
            updateSignUpState(SignUpState.ERROR);
            Fathom.trackEvent("Sign Up: Error"); // Sign Up: Error
          });
      } else {
        updateSignUpState(SignUpState.INVALID);
        setHasErrors(true);
        Fathom.trackEvent("Sign Up: Invalid"); // Sign Up: Invalid
      }
    },
    [email]
  );

  const refinedPlaceholder =
    mobilePlaceholder && isLargeMobileOrSmaller
      ? mobilePlaceholder
      : placeholder;

  const resultMessage = useMemo(
    () => getResultMessage(signUpState),
    [signUpState]
  );

  return (
    <form
      onSubmit={onSubmit}
      onBlur={() => updateSignUpState(SignUpState.INITIAL)}
      {...rest}
    >
      <InputWrapper>
        <FormWrapper
          hasErrors={hasErrors || signUpState === SignUpState.SUBMITTED}
        >
          <StyledInput
            value={email}
            hasErrors={hasErrors}
            onChange={(e: any) => {
              setEmail(e.target.value);
              setHasErrors(false);
            }}
            placeholder={refinedPlaceholder}
            aria-label="Sign up for the latest news from Bolt.new!"
            aria-required
          />
          <Button
            size="small"
            classification="primary"
            text="Submit"
            color="#fff"
            isSubmitted={signUpState === SignUpState.SUBMITTED}
            onClick={(e: any) => {
              if (
                signUpState !== SignUpState.SUBMITTED &&
                signUpState !== SignUpState.SUBMITTING
              )
                onSubmit(e);
            }}
            aria-label="Submit email"
          >
            {signUpState === SignUpState.SUBMITTED ? (
              <BodyBold>Submit</BodyBold>
            ) : signUpState === SignUpState.SUBMITTING ? (
              <Spinner color="white" size={isLargeMobileOrSmaller ? 18 : 24} />
            ) : (
              <BodyBold>Submit</BodyBold>
            )}
          </Button>
        </FormWrapper>
        {(hasErrors || signUpState === SignUpState.SUBMITTED) && (
          <ResultText hasErrors={hasErrors}>{resultMessage}</ResultText>
        )}
      </InputWrapper>
    </form>
  );
};

const FormWrapper = styled.div<CheckErrorsProps>`
  display: flex;
  height: 54px;
  padding: 15px 6px 15px 24px;
  align-items: center;
  gap: 24px;
  background: ${({ theme }) => theme.colors.secondary.white};
  margin-top: 32px;
  margin-bottom: ${({ hasErrors }) => (hasErrors ? "0px" : "16px")};
  border-radius: 100px;
  ${mediaQueries.tablet} {
    width: 100%;
  }
`;

const StyledInput = styled.input<CheckErrorsProps>`
  border: none;
  background: transparent;
  outline: none;
  width: 300px;
  height: 26px;
  display: flex;
  align-items: center;

  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;

  ::placeholder {
    color: var(--Text-Light-Med-emp, #6d6d6d);
    font-family: "Satoshi";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
    margin: 0;
  }

  color: ${({ hasErrors }) =>
    hasErrors
      ? ({ theme }) => theme.colors.state.error
      : ({ theme }) => theme.colors.secondary.navy};
  &:disabled {
    cursor: not-allowed;
    filter: grayscale(1);
  }
  ${mediaQueries.tablet} {
    padding: 12px 16px;
    width: 330px;
  }
  ${mediaQueries.largeMobile} {
    padding: 0;
    width: 100%;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  ${mediaQueries.medium} {
    width: 100%;
  }
  ${mediaQueries.tablet} {
    width: 100%;
  }
  ${mediaQueries.largeMobile} {
    width: 100%;
  }
`;

const ResultText = styled(Body)<CheckErrorsProps>`
  color: ${({ hasErrors }) =>
    hasErrors
      ? ({ theme }) => theme.colors.state.error
      : ({ theme }) => theme.colors.state.success};
  margin-top: 8px;
`;

export default MailingListSignup;
