import React, {useContext, useState} from 'react'
import {Button, Form, FormInput} from 'semantic-ui-react'
import gql from 'graphql-tag'
import {useMutation} from "@apollo/client";
import {useForm} from "../util/hooks";
import {AuthContext} from "../context/auth";
import DisplayErrorGroup from "../Components/DisplayErrorGroup";
import Banner from "../Components/Banner";


const LOGIN_USER = gql`
    mutation login(
        $username: String!
        $password: String!
    ) {
        login(
            username: $username
            password: $password
        ) {
            id email token username createdAt admin
        }
    }
`

function Login(props) {
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({})

    const initialState = {
        username: '',
        password: '',
    }

    const {onChange, onSubmit, values} = useForm(loginUserCallback, initialState)

    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
        update(_, {data: {login: userData}}) {
            context.login(userData)
            props.history.push('/')
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: values
    })

    function loginUserCallback() {
        loginUser()
    }

    return (
        <div>
            <Banner bigheader='Login to Make Appointments!' subtext=''/>
            <div className='form-container'>
                <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                    <FormInput
                        label='Username'
                        placeholder='Username...'
                        name='username'
                        value={values.username}
                        error={!!errors.username}
                        onChange={onChange}
                    />
                    <FormInput
                        label='Password'
                        placeholder='Password...'
                        name='password'
                        type='password'
                        value={values.password}
                        error={!!errors.password}
                        onChange={onChange}
                    />
                    <Button type='submit' primary>
                        Login!
                    </Button>
                </Form>
                <DisplayErrorGroup errors={errors}/>
            </div>
        </div>

    )
}

export default Login
