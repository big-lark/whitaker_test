const ary = [1, 2, 3, 4, 5]

const [head, ...rest] = ary

//console.log(head, rest)
//console.log(head, ...rest)

const personalData = {
  email: 'asdqwer@asd.com',
  password: '*******',
}

const publicData = {
  nickname: 'foo',
}

const whitakerData = {
  type: 'enterprise',
}

const overrides = {
  email: '123d@asdas.com',
}

const shouldOverride = true

const user = {
  ...personalData,
  ...publicData,
  ...whitakerData,
  ...overrides,
  ...{
    email: 'vvvv@vvv.com',
    password: '******',
  },
  ...(shouldOverride
    ? {
        email: '123d@asdas.com',
      }
    : null),
}

console.log(user)

// function
function foo(head, ...rest) {
  console.log(head)
  console.log(rest)
}

foo(1, 2, 3, 4)
