import {ErrorMessage, Field, Form as FormikForm, Formik} from "formik";

export function Input({name, ...rest}) {
  return (
    <div>
      <Field name={name} {...rest}/>
      <ErrorMessage name={name} component="small" className="text-red-500" />
    </div>
  )
}

export function Radio({name, options, ...rest}) {
  return (
    <div>
      {options && options.map((option) => {
        return (
          <div key={option.id}>
            <Field type="radio" id={option.id} name={name} value={option.value} />&nbsp;
            <label htmlFor={option.id}>{option.label}</label>&nbsp;&nbsp;
          </div>
        )
      })}
    </div>
  )
}

export function Checkbox({name, id, label, className, ...rest}) {
  return (
    <div className={className}>
      <Field type="checkbox" name={name} id={id} {...rest} />
      <label htmlFor={id}>{label}</label>
      <ErrorMessage name={name} component="small" className="text-red-500" />
    </div>
  )
}

export function Select({name, label, options, ...rest}) {
  return (
    <>
      {label && label}
      <select name={name} {...rest}>
        {options && options.map(option => <option key={option.id} value={option.value}>{option.label}</option>)}
      </select>
    </>
  )
}

export function Textarea({children, ...rest}) {
  return (
    <textarea {...rest}>{children}</textarea>
  )
}

export function Form({initialValues, children, onSubmit, validationSchema}) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {(formEvents) => {
        return (
          <FormikForm className="flex flex-col w-1/4 p-2 gap-3">
            {children(formEvents)}
          </FormikForm>
        )
      }}
    </Formik>
  )
}
