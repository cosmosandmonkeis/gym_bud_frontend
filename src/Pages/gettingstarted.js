import React, {useContext, useEffect, useState} from 'react'
import gql from "graphql-tag";
import {useMutation, useQuery} from "@apollo/client";
import {Button, Container, Dropdown, Form, Header} from "semantic-ui-react";
import DisplayErrorGroup from "../Components/DisplayErrorGroup";
import {AuthContext} from "../context/auth";
import {useForm} from "../util/hooks";

function GettingStarted(props) {

    /*
    * userid: $userid
                genderPreference: $genderPreference
                goalPreference: $goalPreference
                frequencyPreference: $frequencyPreference
                * */

    const initialState = {
        timeAvailability:'',
        gymName: '',
        genderPreference:'',
        goalPreference: '',
        frequencyPreference: 0
    }

    const timeOptions = [
        {key: "1", text: "Morning (9AM - 12PM)", value: "morning"},
        {key: "2", text: "Noon (12PM - 3PM)", value: "noon"},
        {key: "3", text: "Afternoon (3PM - 6PM)", value: "afternoon"},
        {key: "4", text: "Evening (6PM - 8PM)", value: "evening"},
        {key: "5", text: "Night (8PM - 12AM)", value: "night"},
    ]

    const gymOptions = [
        {key: "1", text: "Calpoly Rec Center", value: "calpoly_rec"},
    ]

    const genderOptions = [
        {key: "1", text: "Male", value: "male"},
        {key: "2", text: "Female", value: "female"},
        {key: "3", text: "No Preference", value: "any"},
        {key: "4", text: "Other", value: "other"},
    ]

    const goalOptions = [
        {key: "1", text: "Bodybuilding", value: "bodybuilding"},
        {key: "2", text: "Calisthenics", value: "calisthenics"},
        {key: "3", text: "Yoga/Pilates", value: "yoga/pilates"},
        {key: "4", text: "Other", value: "other"},
    ]

    const frequencyOptions = [
        {key: "1", text: "1", value: 1},
        {key: "2", text: "2", value: 2},
        {key: "3", text: "3", value: 3},
        {key: "4", text: "4", value: 4},
        {key: "5", text: "5", value: 5},
        {key: "6", text: "6", value: 6},
        {key: "7", text: "7", value: 7},
    ]

    const {user} = useContext(AuthContext)

    const {onChange, onSubmit, values} = useForm(changeExtraFields, initialState)
    const [errors, setErrors] = useState({})

    const [updateExtraFields, {loading}] = useMutation(SETEXTRAUSERFIELDS, {
        update(_, data) {
            props.history.push('/')
        },
        onError(err) {
            console.log(err)
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: {
            username: user.username,
            ...values
        }
    })

    function changeExtraFields() {
        console.log({
            username: user.username,
            ...values
        })
        updateExtraFields()
    }

    return (
        <Container>
            <Header>Getting Started</Header>
            <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                <Dropdown
                    label='When?'
                    placeholder='When?...'
                    name='timeAvailability'
                    onChange={onChange}
                    options={timeOptions}
                    selection
                    fluid
                />
                <Dropdown
                    label='Where?'
                    placeholder='Where?...'
                    name='gymName'
                    onChange={onChange}
                    options={gymOptions}
                    selection
                    fluid
                />
                <Dropdown
                    label='Gender Preference?'
                    placeholder='Gender Preference?...'
                    name='genderPreference'
                    onChange={onChange}
                    options={genderOptions}
                    selection
                    fluid
                />
                <Dropdown
                    label='Goal Preference?'
                    placeholder='Goal Preference?...'
                    name='goalPreference'
                    onChange={onChange}
                    options={goalOptions}
                    selection
                    fluid
                />
                <Dropdown
                    label='How Often?'
                    placeholder='How Often?...'
                    name='frequencyPreference'
                    onChange={onChange}
                    options={frequencyOptions}
                    selection
                    fluid
                />
                <Button type='submit' primary>
                    Set My Preferences!
                </Button>
            </Form>
        </Container>
    )
}

const SETEXTRAUSERFIELDS = gql`
    mutation setExtraUserFields(
        $username: String,
        $timeAvailability: String,
        $gymName: String,
        $genderPreference: String,
        $goalPreference: String,
        $frequencyPreference: Int
    ) {
        setExtraUserFields (
            extraFields: {
                username: $username
                timeAvailability: $timeAvailability
                gymName: $gymName
                genderPreference: $genderPreference
                goalPreference: $goalPreference
                frequencyPreference: $frequencyPreference
            }
        ) {
            username
            timeAvailability
            gymName
            genderPreference
            goalPreference
            frequencyPreference
        }
    }
`
export default GettingStarted
