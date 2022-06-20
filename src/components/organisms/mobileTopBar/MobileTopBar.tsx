/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Info from "../../../assets/icons/Info";
import User from "../../../assets/icons/User";
import Box from "../../atoms/box/Box";
import RoundedButton from "../../atoms/buttons/RoundedButton";
import { MobileTopBarProps } from "./MobileTopBar.types";

const Wrapper = styled.div<MobileTopBarProps>``;
const ScaleContainer = styled.div<MobileTopBarProps>`
  transform: ${({ swipedUp }) => (swipedUp ? "scale(0.5)" : "scale(1)")};
  opacity: ${({ swipedUp }) => (swipedUp ? "0" : "1")};
  pointer-events: ${({ swipedUp }) => (swipedUp ? "none" : "all")};
  transition: 0.5s;
`;

const MobileTopBar: FC<MobileTopBarProps> = ({
  setOrder,
  setInfoPageOpen,
  handleOpenMyAccount,
  swipedUp,
}) => {
  return (
    <Wrapper>
      <Box
        position="fixed"
        margin={"10px"}
        width={"calc(100% - 20px)"}
        zIndex={9}
        flexDirection="row"
        justifyContent="space-between"
        gap="8px"
      >
        <ScaleContainer swipedUp={swipedUp}>
          <svg
            width="103px"
            height="44px"
            transform="scale(1.13636364)"
            viewBox="0 0 103 44"
            version="1.1"
            style={{ margin: "2px 5px" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Top Bar/Senf Button</title>
            <defs>
              <rect
                id="path-1"
                x="0"
                y="0"
                width="103"
                height="44"
                rx="18"
              ></rect>
              <filter
                x="-20.4%"
                y="-25.0%"
                width="140.8%"
                height="200.0%"
                filterUnits="objectBoundingBox"
                id="filter-2"
              >
                <feMorphology
                  radius="4"
                  operator="erode"
                  in="SourceAlpha"
                  result="shadowSpreadOuter1"
                ></feMorphology>
                <feOffset
                  dx="0"
                  dy="12"
                  in="shadowSpreadOuter1"
                  result="shadowOffsetOuter1"
                ></feOffset>
                <feGaussianBlur
                  stdDeviation="9"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                ></feGaussianBlur>
                <feColorMatrix
                  values="0 0 0 0 0.729411765   0 0 0 0 0.62745098   0 0 0 0 0.309803922  0 0 0 0.2 0"
                  type="matrix"
                  in="shadowBlurOuter1"
                ></feColorMatrix>
              </filter>
              <rect
                id="path-3"
                x="0"
                y="0"
                width="103"
                height="44"
                rx="18"
              ></rect>
              <filter
                x="-22.3%"
                y="-61.4%"
                width="144.7%"
                height="204.5%"
                filterUnits="objectBoundingBox"
                id="filter-4"
              >
                <feMorphology
                  radius="2"
                  operator="dilate"
                  in="SourceAlpha"
                  result="shadowSpreadOuter1"
                ></feMorphology>
                <feOffset
                  dx="0"
                  dy="-4"
                  in="shadowSpreadOuter1"
                  result="shadowOffsetOuter1"
                ></feOffset>
                <feGaussianBlur
                  stdDeviation="5"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                ></feGaussianBlur>
                <feColorMatrix
                  values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.2 0"
                  type="matrix"
                  in="shadowBlurOuter1"
                ></feColorMatrix>
              </filter>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="linearGradient-5"
              >
                <stop stop-color="#FFFFFF" offset="0%"></stop>
                <stop stop-color="#F8F5ED" offset="100%"></stop>
              </linearGradient>
              <path
                d="M1.536,21.6 C2.816,22.496 4.992,23.136 8.224,23.136 C14.4,23.136 17.536,20.704 17.536,16.192 C17.536,12.384 14.432,10.72 10.368,9.856 C8.224,9.376 6.592,9.248 6.592,8.064 C6.592,7.008 7.488,6.464 9.344,6.464 C11.296,6.464 13.408,7.424 14.784,8.704 C14.912,8.8 17.056,7.264 17.056,5.472 C17.056,4.48 16.544,3.584 15.392,2.88 C14.112,2.08 12.128,1.536 9.28,1.536 C3.616,1.536 0.48,4.064 0.48,8.32 C0.48,12.608 3.936,13.952 7.392,14.688 C9.44,15.104 11.04,15.328 11.04,16.608 C11.04,17.664 10.144,18.208 8.192,18.208 C6.016,18.208 3.424,17.056 2.112,15.84 C1.888,15.68 0,17.344 0,18.88 C0,19.904 0.448,20.864 1.536,21.6 Z M19.08,14.944 C19.08,20.064 22.472,23.136 27.88,23.136 C30.12,23.136 31.816,22.752 33,22.08 C34.152,21.408 34.792,20.48 34.792,19.424 C34.792,17.088 31.912,16.992 31.88,17.056 C31.304,18.176 29.992,18.976 28.104,18.976 C26.28,18.976 24.904,18.112 24.456,16.608 C24.392,16.48 24.36,16.32 24.328,16.16 L34.44,16.16 C35.4,16.16 35.656,15.616 35.688,14.688 L35.688,14.4 C35.688,9.824 32.328,6.496 27.496,6.496 C22.6,6.496 19.08,10.08 19.08,14.944 Z M30.216,13.312 L24.392,13.312 C24.552,11.648 25.768,10.432 27.4,10.432 C29.096,10.432 30.12,11.488 30.216,13.312 Z M49.008,6.496 C46.512,6.496 44.912,7.744 43.792,9.44 C43.312,7.456 41.904,6.656 40.304,6.656 C39.024,6.656 37.936,7.136 37.936,7.36 L37.936,19.872 C37.936,22.144 39.056,22.848 40.72,22.848 L41.36,22.848 C42.928,22.848 44.08,22.112 44.08,19.872 L44.08,12.736 C44.528,12 45.392,11.488 46.448,11.488 C47.728,11.488 48.464,12.384 48.464,13.792 L48.464,19.872 C48.464,22.144 49.616,22.848 51.248,22.848 L51.888,22.848 C53.488,22.848 54.608,22.08 54.608,19.872 L54.608,12.736 C54.608,9.472 53.104,6.496 49.008,6.496 Z M59.256,19.872 C59.256,22.08 60.44,22.848 62.04,22.848 L62.648,22.848 C64.312,22.848 65.4,22.144 65.4,19.872 L65.4,11.456 L66.488,11.456 C68.152,11.456 68.952,10.72 68.952,9.376 L68.952,9.024 C68.952,7.584 68.152,6.816 66.488,6.816 L65.176,6.816 L65.176,6.304 C65.176,5.024 65.688,4.544 66.712,4.544 C67.512,4.544 68.216,4.896 68.664,5.312 C68.728,5.408 69.848,4.256 69.848,2.912 C69.848,2.24 69.592,1.6 69.016,1.056 C68.28,0.416 67.096,0 65.304,0 C61.816,0 59.256,1.472 59.256,6.368 L59.256,6.816 L58.648,6.816 C56.984,6.816 56.152,7.552 56.152,8.896 L56.152,9.248 C56.152,10.72 56.984,11.456 58.648,11.456 L59.256,11.456 L59.256,19.872 Z"
                id="path-6"
              ></path>
              <filter
                x="-11.5%"
                y="-17.3%"
                width="122.9%"
                height="169.2%"
                filterUnits="objectBoundingBox"
                id="filter-7"
              >
                <feMorphology
                  radius="1"
                  operator="erode"
                  in="SourceAlpha"
                  result="shadowSpreadOuter1"
                ></feMorphology>
                <feOffset
                  dx="0"
                  dy="4"
                  in="shadowSpreadOuter1"
                  result="shadowOffsetOuter1"
                ></feOffset>
                <feGaussianBlur
                  stdDeviation="3"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                ></feGaussianBlur>
                <feColorMatrix
                  values="0 0 0 0 0.839215686   0 0 0 0 0.670588235   0 0 0 0 0  0 0 0 0.499945367 0"
                  type="matrix"
                  in="shadowBlurOuter1"
                ></feColorMatrix>
              </filter>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="99.1067526%"
                id="linearGradient-8"
              >
                <stop
                  stop-color="#FFFFFF"
                  stop-opacity="0.3"
                  offset="10.0114729%"
                ></stop>
                <stop
                  stop-color="#BAA04F"
                  stop-opacity="0.04"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <g
              id="Top-Bar"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Top-Bar/Senf-Button">
                <g id="Shape">
                  <g id="Shadow" fill="black" fill-opacity="1">
                    <use filter="url(#filter-2)" xlinkHref="#path-1"></use>
                  </g>
                  <g id="Glow" fill="black" fill-opacity="1">
                    <use filter="url(#filter-4)" xlinkHref="#path-3"></use>
                  </g>
                  <rect
                    id="Surface"
                    stroke="url(#linearGradient-5)"
                    stroke-width="2"
                    fill="#FCFBF8"
                    x="1"
                    y="1"
                    width="101"
                    height="42"
                    rx="18"
                  ></rect>
                </g>
                <g id="Senf-Logo" transform="translate(16.608000, 9.312000)">
                  <g id="Shadow" fill="black" fill-opacity="1">
                    <use filter="url(#filter-7)" xlinkHref="#path-6"></use>
                  </g>
                  <path
                    d="M1.536,21.6 C2.816,22.496 4.992,23.136 8.224,23.136 C14.4,23.136 17.536,20.704 17.536,16.192 C17.536,12.384 14.432,10.72 10.368,9.856 C8.224,9.376 6.592,9.248 6.592,8.064 C6.592,7.008 7.488,6.464 9.344,6.464 C11.296,6.464 13.408,7.424 14.784,8.704 C14.912,8.8 17.056,7.264 17.056,5.472 C17.056,4.48 16.544,3.584 15.392,2.88 C14.112,2.08 12.128,1.536 9.28,1.536 C3.616,1.536 0.48,4.064 0.48,8.32 C0.48,12.608 3.936,13.952 7.392,14.688 C9.44,15.104 11.04,15.328 11.04,16.608 C11.04,17.664 10.144,18.208 8.192,18.208 C6.016,18.208 3.424,17.056 2.112,15.84 C1.888,15.68 0,17.344 0,18.88 C0,19.904 0.448,20.864 1.536,21.6 Z M19.08,14.944 C19.08,20.064 22.472,23.136 27.88,23.136 C30.12,23.136 31.816,22.752 33,22.08 C34.152,21.408 34.792,20.48 34.792,19.424 C34.792,17.088 31.912,16.992 31.88,17.056 C31.304,18.176 29.992,18.976 28.104,18.976 C26.28,18.976 24.904,18.112 24.456,16.608 C24.392,16.48 24.36,16.32 24.328,16.16 L34.44,16.16 C35.4,16.16 35.656,15.616 35.688,14.688 L35.688,14.4 C35.688,9.824 32.328,6.496 27.496,6.496 C22.6,6.496 19.08,10.08 19.08,14.944 Z M30.216,13.312 L24.392,13.312 C24.552,11.648 25.768,10.432 27.4,10.432 C29.096,10.432 30.12,11.488 30.216,13.312 Z M49.008,6.496 C46.512,6.496 44.912,7.744 43.792,9.44 C43.312,7.456 41.904,6.656 40.304,6.656 C39.024,6.656 37.936,7.136 37.936,7.36 L37.936,19.872 C37.936,22.144 39.056,22.848 40.72,22.848 L41.36,22.848 C42.928,22.848 44.08,22.112 44.08,19.872 L44.08,12.736 C44.528,12 45.392,11.488 46.448,11.488 C47.728,11.488 48.464,12.384 48.464,13.792 L48.464,19.872 C48.464,22.144 49.616,22.848 51.248,22.848 L51.888,22.848 C53.488,22.848 54.608,22.08 54.608,19.872 L54.608,12.736 C54.608,9.472 53.104,6.496 49.008,6.496 Z M59.256,19.872 C59.256,22.08 60.44,22.848 62.04,22.848 L62.648,22.848 C64.312,22.848 65.4,22.144 65.4,19.872 L65.4,11.456 L66.488,11.456 C68.152,11.456 68.952,10.72 68.952,9.376 L68.952,9.024 C68.952,7.584 68.152,6.816 66.488,6.816 L65.176,6.816 L65.176,6.304 C65.176,5.024 65.688,4.544 66.712,4.544 C67.512,4.544 68.216,4.896 68.664,5.312 C68.728,5.408 69.848,4.256 69.848,2.912 C69.848,2.24 69.592,1.6 69.016,1.056 C68.28,0.416 67.096,0 65.304,0 C61.816,0 59.256,1.472 59.256,6.368 L59.256,6.816 L58.648,6.816 C56.984,6.816 56.152,7.552 56.152,8.896 L56.152,9.248 C56.152,10.72 56.984,11.456 58.648,11.456 L59.256,11.456 L59.256,19.872 Z"
                    id="Logo"
                    stroke="url(#linearGradient-8)"
                    stroke-width="2"
                    fill="#FED957"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </ScaleContainer>

        <Box gap="8px" flexDirection="row">
          <ScaleContainer swipedUp={swipedUp}>
            <RoundedButton
              icon={<Info />}
              onClick={() => setInfoPageOpen(true)}
            />
          </ScaleContainer>
          <ScaleContainer swipedUp={swipedUp}>
            <RoundedButton
              icon={<User />}
              onClick={() => {
                handleOpenMyAccount(true);
              }}
            />
          </ScaleContainer>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default MobileTopBar;
