import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './styled'
import { AppLayout } from '~/components'
import { TextField } from '~/components/TextField'
import { Button } from '~/components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { checkSmsCode, RegisterFormValues, sendSms } from '~/api'
import { toast } from 'react-toastify'
import { useLogin, useRegister } from '~/hook'

export const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormValues>()

  const { signup, profile, isLoading } = useRegister()
  const navigate = useNavigate()

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const onSubmit = (props: RegisterFormValues) => {
    signup(props)
  }

  const handleOnPressSmsCode = () => {
    setMinutes(5)
    sendSms(watch('phone_number'))
  }

  const handleOnPressVerifySmsCode = () => {
    try {
      setMinutes(0)
      checkSmsCode(watch('phone_number'), watch('sms_code'))
      toast.success('전화번호 인증에 성공하셨습니다.', {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
        theme: 'light',
      })
    } catch (err) {
      toast.error('번호가 잘못된 것 같아요! 다시 한번 확인해주세요 :)', {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
        theme: 'light',
      })
    }
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => clearInterval(countdown)
  }, [minutes, seconds])

  const password = useRef({})
  password.current = watch('password', '')

  useEffect(() => {
    if (profile && !isLoading) {
      navigate('/')
    }
  }, [profile, isLoading])

  return (
    <AppLayout>
      <section>
        <S.Title type="bold">대시판 회원가입</S.Title>
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
              required: '아이디를 입력해주세요.',
            })}
          />
          <TextField
            type="password"
            label="비밀번호"
            error={errors.password?.message}
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message: '비밀번호는 8자 이상이여야 합니다,',
              },
            })}
          />
          <TextField
            type="password"
            label="비밀번호 확인"
            error={errors.password_check?.message}
            {...register('password_check', {
              required: '비밀번호 확인을 입력해주세요.',
              validate: (value) =>
                value === password.current ||
                '입력한 비밀번호와 일치하지 않습니다.',
            })}
          />
          <TextField
            type="text"
            label="이름"
            error={errors.name?.message}
            {...register('name', {
              required: '이름을 입력해주세요.',
            })}
          />
          <TextField
            type="text"
            label="닉네임"
            error={errors.nickname?.message}
            {...register('nickname', {
              required: '닉네임을 입력해주세요.',
            })}
          />
          <TextField
            type="phone"
            label="전화번호"
            error={errors.phone_number?.message}
            {...register('phone_number', {
              required: '전화번호를 입력해주세요.',
              pattern: {
                value: /01[0-1, 7][0-9]{7,8}$/,
                message: '전화번호가 잘못되었습니다. 다시 입력해주세요.',
              },
            })}
          >
            <Button
              variant="outlined"
              onClick={handleSubmit(handleOnPressSmsCode)}
              style={{
                flexShrink: 0,
                marginLeft: '10px',
                maxWidth: '9.03rem',
                display: 'flex',
                fontSize: '1.2rem',
              }}
            >
              인증번호 받기
            </Button>
          </TextField>

          {minutes > 0 && (
            <TextField
              type="text"
              label="인증번호 확인"
              error={errors.sms_code?.message}
              {...register('sms_code', {
                required: '인증번호를 입력해주세요.',
                minLength: {
                  value: 6,
                  message: '인증번호는 6자리 입니다 😥',
                },
                maxLength: {
                  value: 6,
                  message: '인증번호는 6자리 입니다 😥',
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: '인증번호는 숫자입니다. 다시 한번 확인해주세요!',
                },
              })}
            >
              <Button
                variant="outlined"
                onClick={handleSubmit(handleOnPressVerifySmsCode)}
                style={{
                  flexShrink: 0,
                  marginLeft: '10px',
                  maxWidth: '4.39rem',
                  display: 'flex',
                  fontSize: '1.2rem',
                }}
              >
                확인
              </Button>
              <S.DeadlineText type="light">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </S.DeadlineText>
            </TextField>
          )}
          <S.FooterWrapper>
            <S.FooterInfoWrapper type="regular">
              이미 아이디가 있으신가요? <Link to="/auth/login">로그인</Link>
            </S.FooterInfoWrapper>
            <S.ButtonWrapper>
              <Button type="submit" variant="contained">
                회원가입
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
      <div>.</div>
    </AppLayout>
  )
}
