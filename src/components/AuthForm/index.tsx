'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Form, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { ValidationError } from 'yup';
import { authSchema } from '@/schemas/auth.schema';
import { IAuth } from '@/interfaces/auth.interface';
import {
  FormContainer,
  CustomInput,
  CustomInputPassword,
  SubmitButton,
  CheckboxContainer,
  CustomCheckbox,
  LinkContainer,
} from './styles';
import Link from 'next/link';

const AuthForm: React.FC = () => {
  const [form] = Form.useForm();
  const [users, setUsers] = useState<IAuth[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const loadUsers = useCallback(async () => {
    try {
      const response = await fetch('/users.json');
      const data: IAuth[] = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const checkButtonDisabled = useCallback(() => {
    const { email, password } = form.getFieldsValue();
    const isEmailValid = !!email && !form.getFieldError('email').length;
    const isPasswordValid =
      !!password && !form.getFieldError('password').length;

    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  }, [form]);

  const validateField = useCallback(
    async (name: keyof IAuth, value: string) => {
      try {
        await authSchema.validateAt(name, { [name]: value });
        form.setFields([{ name, errors: [] }]);
        checkButtonDisabled();
      } catch (error) {
        if (error instanceof ValidationError) {
          form.setFields([{ name, errors: [error.message] }]);
        }
      }
    },
    [form, checkButtonDisabled],
  );

  const onFinish = useCallback(
    async (values: IAuth) => {
      try {
        await authSchema.validate(values, { abortEarly: false });

        const user = users.find(
          user =>
            user.email === values.email && user.password === values.password,
        );
        if (user) {
          message.success('Login realizado com sucesso!');
          console.log('Success:', values);
        } else {
          message.error('E-mail ou senha incorretos.');
        }
      } catch (err) {
        if (err instanceof ValidationError) {
          const validationErrors = err.inner.reduce(
            (acc: Record<string, string>, error) => {
              acc[error.path!] = error.message;
              return acc;
            },
            {},
          );

          form.setFields(
            Object.keys(validationErrors).map(field => ({
              name: field,
              errors: [validationErrors[field]],
            })),
          );
        }
      }
    },
    [form, users],
  );

  return (
    <FormContainer>
      <Form form={form} name="auth_form" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              validator: async (_, value) => {
                await validateField('email', value);
              },
            },
          ]}
        >
          <CustomInput
            prefix={<UserOutlined />}
            placeholder="E-mail"
            onBlur={async () => {
              const emailValue = form.getFieldValue('email');
              await validateField('email', emailValue);
            }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              validator: async (_, value) => {
                await validateField('password', value);
              },
            },
          ]}
        >
          <CustomInputPassword
            prefix={<LockOutlined />}
            placeholder="Senha"
            onBlur={async () => {
              const passwordValue = form.getFieldValue('password');
              await validateField('password', passwordValue);
            }}
          />
        </Form.Item>

        <CheckboxContainer>
          <Form.Item>
            <CustomCheckbox defaultChecked>Lembrar de mim</CustomCheckbox>
          </Form.Item>
          <Link href="/forgot-password">Esqueceu sua senha?</Link>
        </CheckboxContainer>

        <Form.Item>
          <SubmitButton
            type="primary"
            htmlType="submit"
            size="large"
            disabled={isButtonDisabled}
          >
            Entrar
          </SubmitButton>
        </Form.Item>

        <LinkContainer>
          <span>Não tem uma conta?</span>
          <Link href="/register">Inscreva-se</Link>
        </LinkContainer>
      </Form>
    </FormContainer>
  );
};

export default AuthForm;
