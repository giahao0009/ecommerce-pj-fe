import React from "react";
import { Wrapper, InputLoginWrapper, LabelLogin, InputLogin } from "./styled";

function InputField({
  label,
  placeholder,
  onFocus,
  id,
  name,
  type,
  value,
  onChange,
  login,
  icon,
}) {
  return (
    <Wrapper>
      {login && (
        <InputLoginWrapper>
          <LabelLogin>{label}</LabelLogin>
          <InputLogin
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
          />
        </InputLoginWrapper>
      )}
    </Wrapper>
  );
}

export default InputField;
