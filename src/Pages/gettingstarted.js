import React, {useContext, useEffect, useState} from 'react'
import gql from "graphql-tag";
import {useMutation} from "@apollo/client";
import {Button, Container, Form, Header} from "semantic-ui-react";
import {useForm} from "../util/hooks";
import DisplayErrorGroup from "../Components/DisplayErrorGroup";
import {AuthContext} from "../context/auth";

function GettingStarted(props) {

    /*
    * userid: $userid
                genderPreference: $genderPreference
                goalPreference: $goalPreference
                frequencyPreference: $frequencyPreference
                * */

    const initialState = {
        userid: '',
        genderPreference: 'male',
        goalPreference: 'bodybuilding',
        frequencyPreference: 1
    }

    const genderOptions = [
        {key: "1", text: "Male", value: "male"},
        {key: "2", text: "Female", value: "female"},
        {key: "3", text: "No Preference", value: "any"},
        {key: "4", text: "Non-Binary", value: "non-binary"},
    ]

    const goalPreference = [
        {key: "1", text: "Bodybuilding", value: "bodybuilding"},
        {key: "2", text: "Calisthenics", value: "calisthenics"},
        {key: "3", text: "Yoga/Pilates", value: "yoga/pilates"},
        {key: "4", text: "Other", value: "other"},
    ]

    const frequencyPreference = [
        {key: "1", text: "1", value: 1},
        {key: "2", text: "2", value: 2},
        {key: "3", text: "3", value: 3},
        {key: "4", text: "4", value: 4},
        {key: "5", text: "5", value: 5},
        {key: "6", text: "6", value: 6},
        {key: "7", text: "7", value: 7},
    ]

    const {user} = useContext(AuthContext)
    const {onSubmit} = useForm(setUserPref, initialState)
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({})

    const onChange = (event, result) => {
        const {name, value} = result || event.target;
        setValues({...values, [name]: value});
    };

    const [setPreference, {loading}] = useMutation(SET_USER_PREF, {
        update(_, data) {

            // props.history.push('/match')
        },
        onError(err) {
            // setErrors(err.graphQLErrors[0].extensions.exception.errors)
            console.log(err)
        },
        variables: values
    })

    function setUserPref() {
        console.log(values)
        setPreference()
    }

    useEffect(() => {
        setValues({userid: user.id})
    }, [user])

    return (
        <Container>
            <Header>Get Started</Header>
            <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                <Form.Dropdown
                    label='Gender Preference?'
                    placeholder='Gender Preference?...'
                    name='genderPreference'
                    value={values.genderPreference}
                    error={!!errors.genderPreference}
                    onChange={onChange}
                    options={genderOptions}
                    selection
                />
                <Form.Dropdown
                    label='Goal Preference?'
                    placeholder='Goal Preference?...'
                    name='goalPreference'
                    type='goalPreference'
                    value={values.goalPreference}
                    error={!!errors.goalPreference}
                    onChange={onChange}
                    options={goalPreference}
                    selection
                />
                <Form.Dropdown
                    label='Frequency Preference?'
                    placeholder='Frequency Preference?...'
                    name='frequencyPreference'
                    type='frequencyPreference'
                    value={values.frequencyPreference}
                    error={!!errors.frequencyPreference}
                    onChange={onChange}
                    options={frequencyPreference}
                    selection
                />
                <Button type='submit' primary>
                    Set My Preferences!
                </Button>
            </Form>
            <DisplayErrorGroup errors={errors}/>
        </Container>

    )
}

const SET_USER_PREF = gql`
    mutation setAUsersPreferences(
        $userid: ID!
        $genderPreference: String
        $goalPreference: String
        $frequencyPreference: Int
    ) {
        setAUsersPreferences(
            preferenceInput: {
                userid: $userid,
                genderPreference: $genderPreference,
                goalPreference: $goalPreference,
                frequencyPreference: $frequencyPreference
            }
        ) {
            genderPreference 
        }
    }
`
export default GettingStarted
