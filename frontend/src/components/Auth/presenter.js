import React, { Component } from "react";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";

import "./styles.scss";

export default class presenter extends Component {
  render() {
    const { isMenuOpen, menuClose, menuOpen } = this.props;

    return (
      <>
        <div className="main__menu">
          <div className="main__menu-wrapper">
            <Ionicon
              icon="ios-menu"
              onClick={isMenuOpen ? menuClose : menuOpen}
            />
            <Link to="/">
              <span>청춘어람</span>
            </Link>
          </div>
        </div>

        <section className="main">
          <div className="menu__login">
            <div className="login-form">
              <h1>로그인</h1>
              <form>
                <span>아이디</span>
                <input type="text" className="form__input" />
                <span>비밀번호</span>
                <input type="password" className="form__input" />
                <input type="submit" value="로그인" className="form__submit" />
              </form>
            </div>

            <span className="login-divider">
              <span>계정이 없으신가요?</span>
              <span>청춘어람에 가입하세요!</span>
            </span>

            <div className="signup-form">
              <h1>회원가입</h1>
              <form>
                <span>아이디</span>
                <input type="text" className="form__input" />
                <span>비밀번호</span>
                <input type="password" className="form__input" />
                <span>비밀번호 확인</span>
                <input type="password" className="form__input" />
                <input
                  type="submit"
                  value="회원가입"
                  className="form__submit"
                />
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}
