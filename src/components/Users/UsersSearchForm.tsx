import React from "react";
import {Field, Form, Formik} from "formik";

import {FilterType} from "../../redux/users_reducer";


export const UserSearchForm: React.FC<PropsType> = ({onFilterChanged}) => {
    const onSubmit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }

    const usersSearchFormValidate = (values: any) => {
        // const errors = {}
        // return errors
    }

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{term: "", friend: "null"}}
                validate={usersSearchFormValidate}
                onSubmit={onSubmit}>
                {({isSubmitting}) => (
                    <Form>
                        <Field type="text" name="term"/>
                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Followed</option>
                            <option value="false">Un followed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

type FormType = {
    term: string
    friend: 'true' | 'false' | 'null'
}