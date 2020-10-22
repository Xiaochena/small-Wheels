import React from "react";

import { SpinProps } from "antd/lib/spin";
import { Spin } from "antd";

interface FormSbindProps extends SpinProps {
  children: React.ReactElement;
  value?: string;
  onChange?: (value: any) => void;
}

const SbindInFormItem: React.FC<FormSbindProps> = (props) => {
  const childrenWithProps = React.cloneElement(props.children, {
    onChange: props.onChange,
    value: props.value,
  });
  return <Spin spinning={props.spinning}>{childrenWithProps}</Spin>;
};

export default SbindInFormItem;
