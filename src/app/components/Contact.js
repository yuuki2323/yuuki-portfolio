"use client"
import React from "react";
import { useForm } from "react-hook-form"
import { TitleFont } from "../fonts/TitleFont";
import css from "../componet_css/content.module.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

const submit = (data) =>{
  console.log(data);
}

  return (
    <section className="py-20" id="contact">
      <dev className="max-w-5xl mx-auto ">
        <h2
          className={` mb-8 text-center text-8xl tracking-wider ${TitleFont.className} text-gray-800`}
        >
          Contact
        </h2>
        <form onSubmit={handleSubmit(submit)} method="post" action="https://hyperform.jp/api/6peDG32f" className="max-w-3xl mx-auto">
          <dl>
            <div className="mb-4">
              <dt className="mb-1">
                <label htmlFor="名前" className="text-xl">
                  お名前<span className={css.must}>必須</span>
                </label>
              </dt>
              <dd className="w-2xl">
                <input
                  type="text"
                  
                  className={css.inputWidth}
                 {...register("name", {required:"名前は必須です"})}
                 name="name"
                />
                <p className="text-red-500">{errors.name?.message}</p>
              </dd>
            </div>
            <div className="mb-4">
              <dt className="mb-1">
                <label htmlFor="メール" className="text-xl">
                  メールアドレス<span className={css.must}>必須</span>
                </label>
              </dt>
              <dd>
                <input
                  type="email"
                  
                  className={css.inputWidth}
                  {...register("email" , {required:"メールは必須です"})}
                  name="email"
                />
                <p className="text-red-500">{errors.email?.message}</p>
              </dd>
            </div>
            <div className="mb-4">
              <dt className="mb-1">
                <label htmlFor="件名" className="text-xl">
                  件名<span className={css.must}>必須</span>
                </label>
              </dt>
              <dd>
                <input
                  type="text"
                  
                  className={css.inputWidth}
                  {...register("件名" , {required:"件名は必須です"})}
                  name="件名"
                />
                <p className="text-red-500">{errors.件名?.message}</p>
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
                  
                  colc="80"
                  rows="6"
                  className={css.textarea}
                  {...register("内容" , {required:"内容は必須です"})}
                  name="内容"
                />
                <p className="text-red-500">{errors.内容?.message}</p>
              </dd>
            </div>
            <div className={css.border3px}>
              <div className={css.border2px}>
                <p className="w-10/12 mx-auto my-4">
                  お客様からお預かりした個人情報は
                  お問い合わせに関するやり取りのみに使用いたします。
                  <br />
                  また、お預かりした個人情報は適切に管理し、
                  次のいずれかに該当する場合を除き、
                  個人情報を第三者に提供しません。
                  <br />
                  <br />
                  ・お客様の同意がある場合
                  <br />
                  ・法令に基づき開示することが必要である場合
                </p>
              </div>
            </div>
            <div className="mb-6 font-semibold"><label><input type="checkbox" />上記の入力事項及び注意事項を確認しました。</label></div>
            <div className="mb-4 text-center">
              <button type="submit" className={`${css.button} text-xl`}>
                送信
              </button>
            </div>
          </dl>
        </form>
      </dev>
    </section>
  );
};

export default Contact;
