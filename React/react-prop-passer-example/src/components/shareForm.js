import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import ShareFormSchema from "./yupSchema/shareFormSchema";
import SocialShare from "./socialShare";
import ShareCSS from "./CSS/ShareCSS";
import FormCSS from "./CSS/FormCSS";

// Refer - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Steadylearner Demo Placeholder Image",
      url: "https://avatars0.githubusercontent.com/u/32325099?s=460&v=4"
    };
  }

  handleShareFormSubmit(values) {
    this.setState({
      title: values.title,
      url: values.url
    });
  }

  render() {
    let { title, url } = this.state;

    /**
     * You don't have to use handleChange, handleBlur
     * and handleSubmit by using Formik and Field.
     */

    return (
      <section>
        <ShareCSS>
          <FormCSS>
            <h1>
              <a
                href="https://github.com/steadylearner/prop-passer"
                alt="https://github.com/steadylearner/prop-passer"
                title="https://github.com/steadylearner/prop-passer"
                className="link"
              >
                Prop-Passer
              </a>{" "}
              Example
            </h1>
            <Formik
              initialValues={{
                title: "Type title here(Escreve título aqui favor)",
                url: "Paste image url to share(para compartilhar)"
              }}
              validationSchema={ShareFormSchema}
              onSubmit={(values, { setSubmitting }) => {
                // values are same shape as initial values

                // setSubmitting is required when you use isSubmitting
                setTimeout(() => {
                  this.handleShareFormSubmit(values);
                  setSubmitting(false);
                }, 1000);
              }}
            >
              {({ errors, touched, dirty, isSubmitting, handleReset }) => (
                <Form displayName="ShareForm">
                  <label htmlFor="title">Title:</label>
                  <Field type="text" name="title" />
                  {errors.title && touched.title ? (
                    <div>{errors.title}</div>
                  ) : null}
                  <label htmlFor="url">URL:</label>
                  <Field type="url" name="url" />
                  {errors.url && touched.url ? <div>{errors.url}</div> : null}
                  <button
                    type="button"
                    onClick={() => {
                      handleReset();
                      this.handleShareFormSubmit({
                        title: "Cat Image",
                        url: "https://placekitten.com/380/380"
                      });
                    }}
                    disabled={!dirty || isSubmitting}
                  >
                    Reset
                  </button>
                  <button
                    className="thumbnail"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </FormCSS>
          <div style={{ border: "2px solid #efefef" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "1.5rem"
              }}
            >
              Title - {title}
            </h2>
            <seciton
              style={{
                display: "flex",
                margin: "0 auto",
                width: "50%",
              }}
            >
              <img
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  height: "6rem"
                }}
                className="thumbnail"
                alt={title}
                src={url}
              />
            </seciton>
            <SocialShare title={url} url={url} />
          </div>
        </ShareCSS>
      </section>
    );
  }
}

export default ShareForm;
