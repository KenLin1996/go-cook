import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import WordBox from "../components/WordBox";
import AuthorName from "../components/AuthorName";
import TimeAndMember from "../components/TimeAndMember";
import recipes from "../recipes";
import message from "../picture/icons8-message.png";
import member from "../picture/icons8-member.png";
import more from "../picture/right-arrow.png";
import send from "../picture/send.png";
import sendFocus from "../picture/send-focus.png";
import recipesImg1 from "../picture/recipes-img-1.webp";
import recipesImg2 from "../picture/recipes-img-2.webp";
import recipesImg3 from "../picture/recipes-img-3.webp";
import recipesImg4 from "../picture/recipes-img-4.webp";
import bookMark from "../picture/bookMark .png";
import bookMarkCheck from "../picture/bookMarkCheck.png";

export function Wrap({ title, icon, showMoreLink, moreLinkPath }) {
  const wrapStyle = {
    fontWeight: "600",
    fontSize: "20px",
    letterSpacing: "-0.48px",
    lineHeight: "28px",
  };
  return (
    <div className="flex" style={{ display: "flex", alignItems: "center" }}>
      <h2
        style={{
          alignItems: "center",
          display: "flex",
        }}
      >
        {icon && (
          <img
            src={icon}
            style={{
              marginRight: "8px",
              width: "24px",
              height: "24px",
            }}
          />
        )}
        <span style={wrapStyle}>{title}</span>
      </h2>
      {showMoreLink && moreLinkPath && (
        <Link to={moreLinkPath} className="moreLink">
          <img className="moreIcon" src={more} />
        </Link>
      )}
    </div>
  );
}

const RecipeDetail = () => {
  const { id } = useParams();

  const selectedRecipe = recipes.find((recipe) => recipe.id === id);
  console.log(selectedRecipe);

  console.log(id);

  // textInput icon & color change
  const [textAreaFocused, setTextAreaFocused] = useState(false);
  const handleTextAreaFocus = () => {
    setTextAreaFocused(true);
  };
  const handleTextAreaBlur = () => {
    setTextAreaFocused(false);
  };

  // collection icon & color change
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmarkClick = () => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };

  return (
    <div className="rd-wrapper">
      <div className="rd-content">
        <div className="left">
          <div className="img">
            <img className="recipeImg" src={selectedRecipe.picture} />
          </div>
          <WordBox>
            <div className="recipeName">
              <h1>{selectedRecipe.title}</h1>
            </div>
          </WordBox>
          <WordBox>
            <div className="recipeIntroduction">
              <a className="recipeAuthor">
                <AuthorName
                  headshot={selectedRecipe.headshot}
                  author={selectedRecipe.author}
                />
              </a>

              <div className="introductionContent">
                <div className="content">
                  <p>就是一道菜，不然想怎樣？（食譜簡介）</p>
                </div>
              </div>
            </div>
          </WordBox>
          <WordBox>
            <div className="ingredients">
              <Wrap title={"預備食材"} />
              <div style={{ marginTop: "16px" }}>
                <TimeAndMember
                  time={selectedRecipe.time}
                  servings={selectedRecipe.servings}
                />
              </div>
              <div className="ingredient-list">
                <ol>
                  {selectedRecipe.ingredients.map(
                    (ingredient, index, array) => (
                      <li
                        key={index}
                        style={{
                          borderBottom:
                            index === array.length - 1
                              ? "none"
                              : "1px dashed rgb(236 235 233)",
                        }}
                      >
                        {ingredient}
                      </li>
                    )
                  )}
                </ol>
              </div>
            </div>
          </WordBox>

          <WordBox>
            <div className="cookStep">
              <Wrap title={"料理步驟"} />
              <ol>
                {selectedRecipe.steps.map((step) => (
                  <li>
                    <div className="stepName">{step.name}</div>
                    <div className="stepContent">
                      <p>{step.content}</p>
                    </div>
                    <div className="stepImg">
                      {step.images.map((image) => (
                        <div>
                          <img src={image}></img>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </WordBox>
          <WordBox>
            <div className="messageArea">
              <Wrap title={"留言"} icon={message} />

              <div className="commentSection">
                <div className="latest_comment">
                  {/* 放已經留的留言 */}
                  <div className="messageProfile">
                    <img src={member} />
                  </div>
                  <div className="message-board">
                    <a className="">
                      <span>林恩</span>
                    </a>
                    <div className="comment-time">
                      <a>
                        <time>1 年前</time>
                      </a>
                    </div>
                    <div className="comment-body">
                      <div className="comment-title">
                        <span>這是好吃的家常菜</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="messageInputArea">
                  <div className="messageItems">
                    <div className="avatar">
                      <img src={member} />
                    </div>
                    <div className="inputarea-box">
                      <form className="simpleForm">
                        <input type="hidden" />
                        <div className="textInput">
                          <textarea
                            rows={1}
                            className="insert-box"
                            placeholder="在此讚美或留言給創作者"
                            onFocus={handleTextAreaFocus}
                            onBlur={handleTextAreaBlur}
                          />
                          <button className="send">
                            <img src={textAreaFocused ? sendFocus : send} />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </WordBox>
        </div>
        <WordBox>
          <div className="authorArea">
            <Wrap title={"食譜作者"} />
            <div className="authorBox">
              <AuthorName
                headshot={selectedRecipe.headshot}
                headshotWidth="96px"
                headshotHeight="96px"
              />

              <div className="dashboard">
                <div>
                  <div className="one">
                    <div className="dashboard-author">
                      {selectedRecipe.author}
                    </div>
                    <div className="dashboard-time">發布於 2023年12月29日</div>
                  </div>
                  <div className="two">
                    <button className="followButton">點擊追蹤</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="author-describe">
            <div className="describe-area">
              就是愛亂煮！廚房就是我的小天地！💜
              料理無國界，想吃就自己動手煮起來！
            </div>
          </div>
        </WordBox>
        <WordBox>
          <div className="authorRecipes">
            <Wrap
              title={"更多來自此作者的食譜"}
              showMoreLink={true}
              moreLinkPath={{}}
            />

            <div className="recipes-box">
              <Link className="moreRecipeLink">
                <img className="recipes-img" src={recipesImg1} />
                <h2 className="recipes-name">紅蘿蔔炒蛋</h2>
              </Link>
              <Link className="moreRecipeLink">
                <img className="recipes-img" src={recipesImg2} />
                <h2 className="recipes-name">炒小黃瓜</h2>
              </Link>
              <Link className="moreRecipeLink">
                <img className="recipes-img" src={recipesImg3} />
                <h2 className="recipes-name">洋蔥蛋炒金針菇</h2>
              </Link>
              <Link className="moreRecipeLink">
                <img className="recipes-img" src={recipesImg4} />
                <h2 className="recipes-name">馬鈴薯蛋沙拉</h2>
              </Link>
            </div>
          </div>
        </WordBox>
      </div>

      <div className="sidebar">
        <WordBox style={{ border: "1px solid black" }}>
          <div className="sidebar1">
            <div className="sidebar1-0" onClick={handleBookmarkClick}>
              <img src={isBookmarked ? bookMarkCheck : bookMark} />
              <h2>{isBookmarked ? "已收藏" : "收藏食譜"}</h2>
            </div>
            <div className="sidebar1-1">
              <h2>分享</h2>
            </div>
            <div className="sidebar1-2">
              <h2>列印</h2>
            </div>
          </div>
        </WordBox>
      </div>
    </div>
  );
};

export default RecipeDetail;
