
import { TitleFont } from "../fonts/TitleFont";
import css from "../componet_css/content.module.css";

const Contact = () => {

  return (
  

    <section className="py-20 px-8" id="contact">
      <dev className="container mx-auto ">
        <h2
          className={` mb-8 text-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider ${TitleFont.className} text-gray-800`}
        >
          Contact
        </h2>
        <form
          action="https://ssl.form-mailer.jp/fm/service/Forms/confirm"
          method="post"
          name="form1"
          ENCTYPE="multipart/form-data"
          accept-charset="UTF-8"
          className="max-w-3xl mx-auto"
        >
          <input type="hidden" name="key" value="90496bfd802632"></input>
          <dl>
            <div className="mb-4">
              <dt className="mb-1">
                <label htmlFor="名前" className="md:text-xl">
                  お名前<span className={css.must}>必須</span>
                </label>
              </dt>
              <dd className="w-2xl">
                <p className="md:text-xl">
                  姓
                  <input
                    name="field_7003380_sei"
                    type="text"
                    placeholder=""
                    className={css.inputWidth}
                    id="名前"
                  />
                  名
                  <input
                    name="field_7003380_mei"
                    type="text"
                    placeholder=""
                    className={css.inputWidth}
                  />
                </p>
              </dd>
            </div>
            <div className="mb-4">
              <dt className="mb-1">
                <label htmlFor="メール" className="md:text-xl">
                  メールアドレス<span className={css.must}>必須</span>
                </label>
              </dt>
              <dd>
                <input
                  name="field_7003382"
                  type="text"
                  size="30"
                  placeholder=""
                  className={css.inputWidth}
                  id="メール"
                />
              </dd>
            </div>
            <div className="mb-4">
              <dt className="mb-1">
                <label htmlFor="件名" className="md:text-xl">
                  件名<span className={css.must}>必須</span>
                </label>
              </dt>
              <dd>
                <input
                  name="field_7003383"
                  type="text"
                  id="件名"
                  size="30"
                  placeholder=""
                  className={css.inputWidth}
                />
              </dd>
            </div>
            <div className="mb-4">
              <dt className="mb-1">
                <label htmlFor="内容" className="md:text-xl">
                  お問い合わせ内容<span className={css.must}>必須</span>
                </label>
              </dt>
              <dd>
                <textarea
                  textarea
                  name="field_7003384"
                  cols="40"
                  rows="5"
                  placeholder=""
                  className={css.textarea}
                  id="内容"
                />
              </dd>
            </div>

            <div className="mb-4 text-center">
              <button type="submit" name="submit" className={`${css.button} md:text-xl`}>
                送信
              </button>
            </div>
          </dl>
          <p>
        <a href="https://www.form-mailer.jp/?utm_source=https://ssl.form-mailer.jp/fms/90496bfd802632&utm_medium=ownedmedia&utm_campaign=powered-by-formmailer" target="_blank" id="powered">Powered by FormMailer.</a>
      </p>
          <input type="hidden" name="code" value="utf8"/>
        </form>
      </dev>
    </section>
  );
};

export default Contact;
