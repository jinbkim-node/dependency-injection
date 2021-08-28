# Nest dependency-injection 예제

## 의존성 주입
- src/one/one.service.ts -> AppService, TwoService
- src/two/two.service.ts -> AppService, OneService
- src/app.service.ts -> OneService, TwoService

## 기술스택
- NodeJS
- Nest

## 참고
- https://velog.io/@qnfmtm666/1.-NestJS-%EC%9D%B4%EA%B1%B0%EB%8A%94-%EC%95%8C%EA%B3%A0-%EC%8B%9C%EC%9E%91%ED%95%98%EC%9E%90