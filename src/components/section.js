import React from 'react';

function section() {
  return (
    <section>
      <div className="jumbotron" style="position: relative; max-height:505px;">
        <div
          style="width: 100%;height:99%;background-color: rgba(0,0,0,0.5);z-index: 1;position: absolute;"
          className="overlay"
        ></div>
        <img style="z-index: 1;width: 100%;" src="images/hero.png" alt="" />
        <div
          id="text"
          style=" z-index: 3; position: absolute;top:60%; left:13%; "
        >
          <h1 style="color:white;font-size: 40px;font-weight: 600;font-family: Bahnschrift;">
            Computer Engineering
          </h1>
          <p style="color:white;font-family: Bahnschrift;">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>

      <div className="container">
        <div className="box1">
          <ul id="tabs" className="nav nav-pills" role="tablist">
            <li role="presentation">
              <button className="nav-btn">
                All Posts<span>(32)</span>
              </button>
            </li>
            <li id="article" role="presentation">
              <button className="nav-btn">Article</button>
            </li>
            <li id="event" role="presentation">
              <button className="nav-btn">Event</button>
            </li>
            <li id="edu" role="presentation">
              <button className="nav-btn">Education</button>
            </li>
            <li id="job" role="presentation">
              <button className="nav-btn">Jobs</button>
            </li>
            <li id="leave-btn" style="float: right;">
              <button
                id="btn-leave-group"
                style="background-color:transparent; height: 40px; border-radius: 3px;border:1px solid black;background-image: url(images/l.png);background-repeat: no-repeat; background-position: left,10px,7px;padding-left: 35px;"
                onclick="leaveJoin()"
              >
                Join Group
              </button>
            </li>
            <li id="last">
              <button
                id="btn-f"
                onclick="togSecdrop(1)"
                style="background-color:#dcdcdc; height: 40px; border-radius: 7px; margin-right: 30px;"
              >
                <span
                  id="filter-box"
                  style="font-family: Bahnschrift; font-weight: 700;"
                >
                  Write a post{' '}
                </span>
                <span className="caret">
                  <div
                    id="all-type"
                    className="dropdown-content"
                    style="font-size: 15px;font-family: monospace;min-width: 130px;"
                  >
                    <a id="link1">Edit</a>
                    <a id="link2">Delete</a>
                    <a id="link3">Report</a>
                    <a id="link4">Download</a>
                    <a id="link5">More</a>
                  </div>
                </span>
              </button>
            </li>
            <hr style="border-top: 2px solid #dcdcdc; background: transparent; margin-top: 48px;" />
          </ul>
        </div>
        <div className="box2">
          <div
            className="card"
            style="width:100%;height:100%;border: 2px solid #ddd; border-radius: 5px; "
          >
            <img src="images/pic1.jpg" className="card-img-top" alt="..." />
            <div
              className="card-body"
              style="padding-left: 12px; padding-right: 12px;padding-top: 10px;"
            >
              <h4 className="card-title">
                <i
                  style="color:orange;padding-right: 10px; "
                  className="fa fa-pencil-square-o"
                  aria-hidden="true"
                ></i>
                Article
              </h4>
              <h3 className="card-title">
                What if famous brand had regular fonts? Meet Regular Brands!
                <i
                  style="float: right; margin-left:20px; cursor: pointer;"
                  className="fa fa-ellipsis-h"
                  aria-hidden="true"
                  onclick="togSecdrop(2)"
                >
                  <div
                    className="dropdown-content"
                    style="font-size: 15px;font-family: monospace;min-width: 80px;"
                  >
                    <a>Edit</a>
                    <a>Report</a>
                    <a>More</a>
                  </div>
                </i>
              </h3>
              <p className="card-text" style="font-size: 18px;">
                I've worked in UX for the better part of a decade from now,I
                plan to ret...
              </p>
              <div className="info">
                <ul>
                  <li>
                    <img src="images/p1.png" alt="..." />
                  </li>
                  <li>
                    <h3>Sarthk Kamra</h3>
                  </li>
                  <li>
                    <i
                      style="font-size: 13px;padding-left: 220px;"
                      className="fa fa-eye"
                      aria-hidden="true"
                    >
                      <span style="font-size: 14px; font-family: Bahnschrift;">
                        {' '}
                        1.4k views
                      </span>
                    </i>
                  </li>
                  <li>
                    <b>
                      <i
                        style="font-size: 14px; padding-left: 15px;"
                        className="fa fa-share-alt"
                        aria-hidden="true"
                      >
                        <strong style="display: none;"> Share</strong>
                      </i>
                    </b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="box3">
          <div
            className="card"
            style="width:100%;height:100%;border: 2px solid #ddd; border-radius: 5px; "
          >
            <img src="images/pic2.jpg" className="card-img-top" alt="..." />
            <div
              className="card-body"
              style="padding-left: 12px; padding-right: 12px;padding-top: 10px;"
            >
              <h4 className="card-title">
                <i
                  style="color:orange;padding-right: 10px; "
                  className="fa fa-graduation-cap"
                  aria-hidden="true"
                ></i>
                Education
              </h4>
              <h3 className="card-title">
                Tax Benifits For Investement under National Pension Scheme
                launched by Govermentent
                <i
                  style="float: right; margin-left:20px;cursor: pointer;"
                  className="fa fa-ellipsis-h"
                  aria-hidden="true"
                  onclick="togSecdrop(3)"
                >
                  <div
                    className="dropdown-content"
                    style="font-size: 15px;font-family: monospace;min-width: 80px;"
                  >
                    <a href="#">Edit</a>
                    <a href="#">Report</a>
                    <a href="#">More</a>
                  </div>
                </i>
              </h3>
              <p className="card-text" style="font-size: 18px;">
                I've worked in UX for the better part of a decade from now,I
                plan to ret...
              </p>
              <div className="info">
                <ul>
                  <li>
                    <img src="images/p2.jpg" alt="..." />
                  </li>
                  <li>
                    <h3>Sarah West</h3>
                  </li>
                  <li>
                    <i
                      style="font-size: 13px;padding-left: 220px"
                      className="fa fa-eye"
                      aria-hidden="true"
                    >
                      <span style="font-size: 14px; font-family: Bahnschrift;">
                        {' '}
                        1.4k views
                      </span>
                    </i>
                  </li>
                  <li>
                    <b>
                      <i
                        style="font-size: 14px; padding-left: 15px;"
                        className="fa fa-share-alt"
                        aria-hidden="true"
                      >
                        <strong style="display: none;"> Share</strong>
                      </i>
                    </b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="box4">
          <div
            className="card"
            style="width:100%;height:100%;border: 2px solid #ddd; border-radius: 5px; "
          >
            <img src="images/pic3.jpg" className="card-img-top" alt="..." />
            <div
              className="card-body"
              style="padding-left: 12px; padding-right: 12px;padding-top: 10px;"
            >
              <h4 className="card-title">
                <i
                  style="color:orange;padding-right: 10px; "
                  className="fa fa-calendar"
                  aria-hidden="true"
                ></i>
                Meetup
              </h4>
              <h3 className="card-title">
                Finance and Investement Elite Social Mixer @Lujiazui
                <i
                  style="float: right; margin-left:20px;cursor: pointer;"
                  className="fa fa-ellipsis-h"
                  aria-hidden="true"
                  onclick="togSecdrop(4)"
                >
                  <div
                    className="dropdown-content"
                    style="font-size: 15px;font-family: monospace;min-width: 80px;"
                  >
                    <a href="#">Edit</a>
                    <a href="#">Report</a>
                    <a href="#">More</a>
                  </div>
                </i>
              </h3>
              <h5>
                <i className="fa fa-calendar" aria-hidden="true"></i> Fri,12
                Oct,2018{' '}
                <i
                  style="padding-left: 80px; "
                  className="fa fa-map-marker"
                  aria-hidden="true"
                >
                  <span style="font-family: Bahnschrift;font-weight: 600;">
                    {' '}
                    Ahemdabad,India
                  </span>
                </i>
              </h5>
              <p
                className="card-text"
                style="font-size: 18px;text-align: center;"
              >
                <button style="width: 100%; height: 35px; background-color: transparent;outline: 0;border:1px solid #ddd; font-family: monospace; font-size: 12px; color:	#FF4500; font-weight: 600; border-radius: 8px;box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.2);">
                  Visit Website
                </button>
              </p>
              <div className="info">
                <ul>
                  <li>
                    <img id="rj" src="images/p3.jpg" alt="..." />
                  </li>
                  <li>
                    <h3>Ronal Jones</h3>
                  </li>
                  <li>
                    <i
                      style="font-size: 13px;padding-left: 220px"
                      className="fa fa-eye"
                      aria-hidden="true"
                    >
                      <span style="font-size: 14px; font-family: Bahnschrift;">
                        {' '}
                        1.4k views
                      </span>
                    </i>
                  </li>
                  <li>
                    <b>
                      <i
                        style="font-size: 14px; padding-left: 15px;"
                        className="fa fa-share-alt"
                        aria-hidden="true"
                      >
                        <strong style="display: none;"> Share</strong>
                      </i>
                    </b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="box5">
          <div
            className="card"
            style="width:100%;height:100%;border: 2px solid #ddd; border-radius: 5px; "
          >
            <div
              className="card-body"
              style="padding-left: 12px; padding-right: 12px;padding-top: 10px;"
            >
              <h4 className="card-title">
                {' '}
                <i
                  className="fa fa-suitcase"
                  aria-hidden="true"
                  style="color:orange;padding-right: 10px; "
                ></i>
                Jobs
              </h4>
              <h3 className="card-title">
                Software Developer
                <i
                  style="float: right; margin-left:20px;cursor: pointer;"
                  className="fa fa-ellipsis-h"
                  aria-hidden="true"
                  onclick="togSecdrop(5)"
                >
                  <div
                    className="dropdown-content"
                    style="font-size: 15px;font-family: monospace;min-width: 80px;"
                  >
                    <a href="#">Edit</a>
                    <a href="#">Report</a>
                    <a href="#">More</a>
                  </div>
                </i>
              </h3>
              <h5>
                <i className="fa fa-briefcase" aria-hidden="true"></i>{' '}
                Innovaccer Analytics Private Ltd.{' '}
                <i
                  style="padding-left: 80px; "
                  className="fa fa-map-marker"
                  aria-hidden="true"
                >
                  <span style="font-family: Bahnschrift;font-weight: 600;">
                    {' '}
                    Noida,India
                  </span>
                </i>
              </h5>
              <p
                className="card-text"
                style="font-size: 18px;text-align: center;"
              >
                <button style="width: 100%; height: 35px; background-color: transparent;outline: 0;border:1px solid #ddd; font-family: monospace; font-size: 12px; color:#3CB371; font-weight: 600; border-radius: 8px;box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.2);">
                  Apply on Timesjobs
                </button>
              </p>
              <div className="info">
                <ul>
                  <li>
                    <img src="images/p4.jpg" alt="..." />
                  </li>
                  <li>
                    <h3>Joseph Gray</h3>
                  </li>
                  <li>
                    <i
                      style="font-size: 13px;padding-left: 220px"
                      className="fa fa-eye"
                      aria-hidden="true"
                    >
                      <span style="font-size: 14px; font-family: Bahnschrift;">
                        {' '}
                        1.4k views
                      </span>
                    </i>
                  </li>
                  <li>
                    <b>
                      <i
                        style="font-size: 14px; padding-left: 15px;"
                        className="fa fa-share-alt"
                        aria-hidden="true"
                      >
                        <strong style="display: none;"> Share</strong>
                      </i>
                    </b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="box6">
          <ul>
            <li>
              <input
                type="text"
                name=""
                placeholder="Enter your location"
                style="background-image: url(images/loc.png);"
              />
              <i className="fa fa-times" aria-hidden="true"></i>
            </li>
            <li>
              <p>
                <i className="fa fa-info" aria-hidden="true"></i> Your location
                will help us serve better and extend a personalised experience.
              </p>
            </li>
            <li>
              <i className="fa fa-thumbs-up" aria-hidden="true">
                <span style="font-family: Bahnschrift; ">
                  {' '}
                  RECOMMENDED GROUPS
                </span>
              </i>
            </li>
            <li>
              <img src="images/g1.png" alt="" />
              <span className="group">Leisure</span>
              <button type="">Follow</button>
            </li>
            <li>
              <img src="images/g1.png" alt="" />
              <span className="group">Activism</span>
              <button type="">Follow</button>
            </li>
            <li>
              <img src="images/g1.png" alt="" />
              <span className="group">MBA</span>
              <button type="">Follow</button>
            </li>
            <li>
              <img src="images/g1.png" alt="" />
              <span className="group">Philosophy</span>
              <button type="">Follow</button>
            </li>
            <li>
              <span
                style={{
                  float: 'right',
                  color: '#00BFFF',
                  marginRight: '10px'
                }}
              >
                See More...
              </span>
            </li>
          </ul>
        </div>
      </div>
      <button
        type="button"
        style="display: none;"
        className="open-m"
        className="btn btn-primary"
        data-toggle="modal"
        data-target=".bs-example-modal-lg"
      >
        Large modal
      </button>
      <div
        className="modal fade bs-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
      >
        <div
          id="modal-box"
          className="modal-dialog modal-lg"
          role="document"
          style="max-width: 700px;"
        >
          <div className="modal-content">
            <div
              className="modal-header"
              style="background-color:rgba(0,255,127,0.1); text-align: center;"
            >
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                style="outline: 0;"
              >
                &times;
              </button>
              <h5
                className="modal-title"
                style="font-family: Bahnschrift; font-weight: 600; color:	rgb(46,139,87); "
              >
                Let's learn, share & inspire each other with our passion for
                computer engineering.Sign up now.
              </h5>
            </div>
            <div className="modal-body" id="m-body">
              <div className="m-box1">
                <ul>
                  <li>
                    <input
                      id="f-name"
                      style="width: 50%;border-bottom:0px;"
                      type="text"
                      name=""
                      placeholder="First Name"
                    />
                    <input
                      id="l-name"
                      style="width: 50%;border-bottom:0px;border-left:0px;"
                      type="text"
                      name=""
                      placeholder="Last Name"
                    />
                  </li>
                  <li>
                    <input type="text" name="" placeholder="Email" />
                  </li>
                  <li>
                    <input
                      id="pass"
                      type="password"
                      name=""
                      placeholder="Password"
                      style="border-top: 0px; background-image: url(images/e.png);"
                    />
                  </li>
                  <li>
                    <input
                      id="c-pass"
                      type="text"
                      name=""
                      style="border-top:0px;"
                      placeholder="Comfirm Password"
                    />
                  </li>
                  <li>
                    <button id="m-signIn">Sign In</button>
                    <span
                      id="logorsin"
                      style="float: right; display: none;"
                      onclick="SignUp(-1)"
                    >
                      or, Sign Up
                    </span>
                  </li>
                  <li>
                    <button id="m-facebook">
                      <img src="images/f.png" alt="" /> Sign in with Facebook
                    </button>
                  </li>
                  <li>
                    <button id="m-google">
                      <img src="images/g.png" alt="" /> Sign in with Google
                    </button>
                  </li>
                  <li>
                    <h5 id="f-pass">Forgot Password?</h5>
                  </li>
                </ul>
              </div>
              <div className="m-box2">
                <img src="images/log.png" alt="" />
                <h6
                  id="terms"
                  style="text-align: center; font-size: 10px; font-family: Helvetica"
                >
                  By signing up, you agree ourTerms & conditions,Privacy policy
                </h6>
              </div>
              <div
                className="m-box3"
                style="font-family: Bahnschrift; font-weight: 600;"
              >
                <h2 id="m-head">Sign In</h2>
              </div>
              <div className="m-box4">
                <h5 id="que">
                  Don't have account yet?{' '}
                  <span style="color:#0000ff;">Create new for free!</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="images/edit.png"
        id="edit-img"
        style="position: fixed; top:80%; right: 10%; border-radius: 50%; display: none;"
        alt=""
      />

      <i
        id="l-arrow"
        className="fa fa-arrow-left"
        aria-hidden="true"
        style="position: absolute; top:5%; left: 10%;color:white; z-index: 11; font-size: 18px; display: none;"
      ></i>
    </section>
  );
}

export default section;
