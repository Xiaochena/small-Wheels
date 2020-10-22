import React, { useState } from 'react';
import { Input, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface TagRenderProps {
  value?: any;
  onChange?: (value: any) => void;
}

const TagRenderInForm: React.FC<TagRenderProps> = (props) => {
  // 是否显示Input输入框
  const [inputVisible, setInputVisible] = useState(false);

  // 保持input的数据
  const [inputValue, setInputValue] = useState('');

  // 当input发送变化的时候更新input的数据
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (props.onChange && inputValue) props.onChange([...props.value, inputValue]);
    setInputValue('');
    setInputVisible(false);
  };

  const onClose = (index: number) => {
    const newValue = props.value;
    newValue.splice(index, 1);
    if (props.onChange) props.onChange(newValue);
  };

  return (
    <>
      {props?.value?.map((tag: string, index: number) => (
        <Tag
          closable
          onClose={() => {
            onClose(index);
          }}
          color="blue"
          key={index}
        >
          {tag}
        </Tag>
      ))}
      {inputVisible && (
        <Input
          ref={(input) => {
            input?.focus(); // 设置焦点
          }}
          type="text"
          size="small"
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
          style={{ width: '78px', marginRight: '8px', verticalAlign: 'top' }}
        />
      )}
      {!inputVisible && (
        <Tag
          style={{ borderStyle: 'dashed', background: '#fff' }}
          onClick={() => {
            setInputVisible(true);
          }}
          key={props.value?.length + 1}
        >
          <PlusOutlined /> 新增标签
        </Tag>
      )}
    </>
  );
};

export default TagRenderInForm;
