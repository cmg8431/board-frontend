import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './styled'

import { AppLayout } from '~/components'
import { TextField } from '~/components/TextField'
import { Button } from '~/components/Button'
import { LoginFormValues } from '~/api'
import { useLogin } from '~/hook'
import { useNavigate } from 'react-router-dom'

export const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>()

  const { signin, profile, isLoading } = useLogin()
  const navigate = useNavigate()

  const onSubmit = (props: LoginFormValues) => {
    signin(props)
  }

  useEffect(() => {
    if (profile && !isLoading) {
      navigate('/')
    }
  }, [profile, isLoading])

  return (
    <AppLayout>
      <section>
        <S.Title type="bold">대시판 로그인</S.Title>
        <S.Description type="light">
          한세사이버보안고등학교 · 게시판 프로젝트
        </S.Description>
      </section>
      <S.BodySection>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type="text"
            label="아이디"
            error={errors.username?.message}
            {...register('username', {
              required: '올바른 아이디 또는 비밀번호를 입력해주세요.',
            })}
          />
          <TextField
            type="password"
            label="비밀번호"
            error={errors.password?.message}
            {...register('password', {
              required: '올바른 아이디 또는 비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message: '비밀번호는 8자 이상이여야 합니다,',
              },
            })}
          />
          <S.FooterWrapper>
            <S.FooterInfoWrapper type="regular">
              회원가입 / 계정찾기
            </S.FooterInfoWrapper>
            <S.ButtonWrapper>
              <Button type="submit" variant="contained">
                로그인
              </Button>
            </S.ButtonWrapper>
          </S.FooterWrapper>
        </form>
        <S.FooterSection>
          <img
            style={{ width: '0.6rem' }}
            src="https://dimipay-gateway.netlify.app/assets/leftArrow.94445445.svg"
          />
          <S.Typography1 type="regular">메인 게시판 화면으로</S.Typography1>
        </S.FooterSection>
      </S.BodySection>
    </AppLayout>
  )
}
