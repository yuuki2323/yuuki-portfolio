import React from "react";
import { TitleFont } from "../fonts/TitleFont";
import css from "../componet_css/content.module.css"
const Contact = () => {
  return (
    <section className="py-20">
      <dev className="max-w-5xl mx-auto ">
        <h2
          className={` mb-8 text-center text-8xl tracking-wider ${TitleFont.className} text-gray-800`}
        >
          Contact
        </h2>

        <form className="max-w-3xl mx-auto">
          <dl >
            <div className="mb-4">
              <dt className="mb-1">
                <label htmlFor="名前" className="text-xl">
                  お名前<span className={css.must}>必須</span>
                </label>
              </dt>
              <dd className="w-2xl">
                <input type="text" id="名前" name="名前" className={css.inputWidth}/>
              </dd>
            </div>
             <div className="mb-4">
              <dt className="mb-1">
                <label htmlFor="メール" className="text-xl">
                  メールアドレス<span className={css.must}>必須</span>
                </label>
              </dt>
              <dd>
                <input type="email" id="メール" name="メール" className={css.inputWidth} />
              </dd>
            </div>
             <div className="mb-4">
              <dt className="mb-1">
                <label htmlFor="件名" className="text-xl">
                  件名<span className={css.must}>必須</span>
                </label>
              </dt>
              <dd>
                <input type="text" id="件名" name="件名" className={css.inputWidth}/>
              </dd>
            </div>
             <div className="mb-4">
           
              <dt className="mb-1">
                <label htmlFor="内容" className="text-xl">
                  お問い合わせ内容<span className={css.must}>必須</span>
                </label>
              </dt>
              <dd>
                <textarea
                  type="text"
                  id="内容"
                  name="内容"
                  colc="80"
                  rows="6"
                  className={css.textarea}
                />
              </dd>
            </div>
             <div className="mb-4">
              <button type="submit" className="text-lg">送信</button>
            </div>
          </dl>
        </form>
      </dev>
    </section>
  );
};

export default Contact;
