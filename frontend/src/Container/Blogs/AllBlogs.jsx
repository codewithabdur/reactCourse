import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllBlogs.css"
import {Navbar} from "../../Component"

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch("You-data-url");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // const half = Math.ceil(data.data.length / 2);
      setBlogs(data.data);
      // setBlogs(data.data);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <Navbar />
    <section className="py-20 px-6 bg-black">
      {blogs.length === 0 ? (<section className="loader h-[100vh] w-[100vw] flex justify-center items-center">
        <svg
          id="svg-global"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 94 136"
          height="136"
          width="94"
        >
          <path
            stroke="#4B22B5"
            d="M87.3629 108.433L49.1073 85.3765C47.846 84.6163 45.8009 84.6163 44.5395 85.3765L6.28392 108.433C5.02255 109.194 5.02255 110.426 6.28392 111.187L44.5395 134.243C45.8009 135.004 47.846 135.004 49.1073 134.243L87.3629 111.187C88.6243 110.426 88.6243 109.194 87.3629 108.433Z"
            id="line-v1"
          ></path>
          <path
            stroke="#5728CC"
            d="M91.0928 95.699L49.2899 70.5042C47.9116 69.6734 45.6769 69.6734 44.2986 70.5042L2.49568 95.699C1.11735 96.5298 1.11735 97.8767 2.49568 98.7074L44.2986 123.902C45.6769 124.733 47.9116 124.733 49.2899 123.902L91.0928 98.7074C92.4712 97.8767 92.4712 96.5298 91.0928 95.699Z"
            id="line-v2"
          ></path>
          <g id="node-server">
            <path
              fill="url(#paint0_linear_204_217)"
              d="M2.48637 72.0059L43.8699 96.9428C45.742 98.0709 48.281 97.8084 50.9284 96.2133L91.4607 71.7833C92.1444 71.2621 92.4197 70.9139 92.5421 70.1257V86.1368C92.5421 86.9686 92.0025 87.9681 91.3123 88.3825C84.502 92.4724 51.6503 112.204 50.0363 113.215C48.2352 114.343 45.3534 114.343 43.5523 113.215C41.9261 112.197 8.55699 91.8662 2.08967 87.926C1.39197 87.5011 1.00946 86.5986 1.00946 85.4058V70.1257C1.11219 70.9289 1.49685 71.3298 2.48637 72.0059Z"
            ></path>
            <path
              stroke="url(#paint2_linear_204_217)"
              fill="url(#paint1_linear_204_217)"
              d="M91.0928 68.7324L49.2899 43.5375C47.9116 42.7068 45.6769 42.7068 44.2986 43.5375L2.49568 68.7324C1.11735 69.5631 1.11735 70.91 2.49568 71.7407L44.2986 96.9356C45.6769 97.7663 47.9116 97.7663 49.2899 96.9356L91.0928 71.7407C92.4712 70.91 92.4712 69.5631 91.0928 68.7324Z"
            ></path>
            <mask
              height="41"
              width="67"
              y="50"
              x="13"
              maskUnits="userSpaceOnUse"
              className="mask-luminance"
              id="mask0_204_217"
            >
              <path
                fill="white"
                d="M78.3486 68.7324L49.0242 51.0584C47.6459 50.2276 45.4111 50.2276 44.0328 51.0584L14.7084 68.7324C13.3301 69.5631 13.3301 70.91 14.7084 71.7407L44.0328 89.4148C45.4111 90.2455 47.6459 90.2455 49.0242 89.4148L78.3486 71.7407C79.7269 70.91 79.727 69.5631 78.3486 68.7324Z"
              ></path>
            </mask>
            <g mask="url(#mask0_204_217)">
              <path
                fill="#332C94"
                d="M78.3486 68.7324L49.0242 51.0584C47.6459 50.2276 45.4111 50.2276 44.0328 51.0584L14.7084 68.7324C13.3301 69.5631 13.3301 70.91 14.7084 71.7407L44.0328 89.4148C45.4111 90.2455 47.6459 90.2455 49.0242 89.4148L78.3486 71.7407C79.7269 70.91 79.727 69.5631 78.3486 68.7324Z"
              ></path>
              <mask
                height="29"
                width="48"
                y="56"
                x="23"
                maskUnits="userSpaceOnUse"
                className="mask-luminance"
                id="mask1_204_217"
              >
                <path
                  fill="white"
                  d="M68.9898 68.7324L49.0242 56.699C47.6459 55.8683 45.4111 55.8683 44.0328 56.699L24.0673 68.7324C22.6889 69.5631 22.6889 70.91 24.0673 71.7407L44.0328 83.7741C45.4111 84.6048 47.6459 84.6048 49.0242 83.7741L68.9898 71.7407C70.3681 70.91 70.3681 69.5631 68.9898 68.7324Z"
                ></path>
              </mask>
              <g mask="url(#mask1_204_217)">
                <path
                  fill="#5E5E5E"
                  d="M68.9898 68.7324L49.0242 56.699C47.6459 55.8683 45.4111 55.8683 44.0328 56.699L24.0673 68.7324C22.6889 69.5631 22.6889 70.91 24.0673 71.7407L44.0328 83.7741C45.4111 84.6048 47.6459 84.6048 49.0242 83.7741L68.9898 71.7407C70.3681 70.91 70.3681 69.5631 68.9898 68.7324Z"
                ></path>
                <path
                  fill="#71B1C6"
                  d="M70.1311 69.3884L48.42 56.303C47.3863 55.6799 45.7103 55.6799 44.6765 56.303L22.5275 69.6523C21.4938 70.2754 21.4938 71.2855 22.5275 71.9086L44.2386 84.994C45.2723 85.617 46.9484 85.617 47.9821 84.994L70.1311 71.6446C71.1648 71.0216 71.1648 70.0114 70.1311 69.3884Z"
                ></path>
                <path
                  fill="#80C0D4"
                  d="M70.131 70.8923L48.4199 57.8069C47.3862 57.1839 45.7101 57.1839 44.6764 57.8069L22.5274 71.1562C21.4937 71.7793 21.4937 72.7894 22.5274 73.4125L44.2385 86.4979C45.2722 87.1209 46.9482 87.1209 47.982 86.4979L70.131 73.1486C71.1647 72.5255 71.1647 71.5153 70.131 70.8923Z"
                ></path>
                <path
                  fill="#89D3EB"
                  d="M69.751 72.1675L48.4199 59.3111C47.3862 58.6881 45.7101 58.6881 44.6764 59.3111L23.2004 72.2548C22.1667 72.8779 22.1667 73.888 23.2004 74.5111L44.5315 87.3674C45.5653 87.9905 47.2413 87.9905 48.2751 87.3674L69.751 74.4238C70.7847 73.8007 70.7847 72.7905 69.751 72.1675Z"
                ></path>
                <path
                  fill="#97E6FF"
                  d="M68.5091 72.9231L48.4199 60.8153C47.3862 60.1922 45.7101 60.1922 44.6764 60.8153L24.8146 72.7861C23.7808 73.4091 23.7808 74.4193 24.8146 75.0424L44.9038 87.1502C45.9375 87.7733 47.6135 87.7733 48.6473 87.1502L68.5091 75.1794C69.5428 74.5563 69.5428 73.5462 68.5091 72.9231Z"
                ></path>
                <path
                  fill="#97E6FF"
                  d="M66.6747 73.3219L48.4199 62.3197C47.3862 61.6966 45.7101 61.6966 44.6764 62.3197L26.4412 73.3101C25.4075 73.9332 25.4075 74.9433 26.4412 75.5664L44.696 86.5686C45.7297 87.1917 47.4058 87.1917 48.4395 86.5686L66.6747 75.5782C67.7084 74.9551 67.7084 73.945 66.6747 73.3219Z"
                ></path>
              </g>
              <path
                stroke-width="0.5"
                stroke="#F4F4F4"
                d="M68.9898 68.7324L49.0242 56.699C47.6459 55.8683 45.4111 55.8683 44.0328 56.699L24.0673 68.7324C22.6889 69.5631 22.6889 70.91 24.0673 71.7407L44.0328 83.7741C45.4111 84.6048 47.6459 84.6048 49.0242 83.7741L68.9898 71.7407C70.3681 70.91 70.3681 69.5631 68.9898 68.7324Z"
              ></path>
            </g>
          </g>
          <g id="particles">
            <path
              fill="url(#paint3_linear_204_217)"
              d="M43.5482 32.558C44.5429 32.558 45.3493 31.7162 45.3493 30.6778C45.3493 29.6394 44.5429 28.7976 43.5482 28.7976C42.5535 28.7976 41.7471 29.6394 41.7471 30.6778C41.7471 31.7162 42.5535 32.558 43.5482 32.558Z"
              className="particle p1"
            ></path>
            <path
              fill="url(#paint4_linear_204_217)"
              d="M50.0323 48.3519C51.027 48.3519 51.8334 47.5101 51.8334 46.4717C51.8334 45.4333 51.027 44.5915 50.0323 44.5915C49.0375 44.5915 48.2311 45.4333 48.2311 46.4717C48.2311 47.5101 49.0375 48.3519 50.0323 48.3519Z"
              className="particle p2"
            ></path>
            <path
              fill="url(#paint5_linear_204_217)"
              d="M40.3062 62.6416C41.102 62.6416 41.7471 61.9681 41.7471 61.1374C41.7471 60.3067 41.102 59.6332 40.3062 59.6332C39.5104 59.6332 38.8653 60.3067 38.8653 61.1374C38.8653 61.9681 39.5104 62.6416 40.3062 62.6416Z"
              className="particle p3"
            ></path>
            <path
              fill="url(#paint6_linear_204_217)"
              d="M50.7527 73.9229C52.1453 73.9229 53.2743 72.7444 53.2743 71.2906C53.2743 69.8368 52.1453 68.6583 50.7527 68.6583C49.3601 68.6583 48.2311 69.8368 48.2311 71.2906C48.2311 72.7444 49.3601 73.9229 50.7527 73.9229Z"
              className="particle p4"
            ></path>
            <path
              fill="url(#paint7_linear_204_217)"
              d="M48.5913 76.9312C49.1882 76.9312 49.672 76.4262 49.672 75.8031C49.672 75.1801 49.1882 74.675 48.5913 74.675C47.9945 74.675 47.5107 75.1801 47.5107 75.8031C47.5107 76.4262 47.9945 76.9312 48.5913 76.9312Z"
              className="particle p5"
            ></path>
            <path
              fill="url(#paint8_linear_204_217)"
              d="M52.9153 67.1541C53.115 67.1541 53.2768 66.9858 53.2768 66.7781C53.2768 66.5704 53.115 66.402 52.9153 66.402C52.7156 66.402 52.5538 66.5704 52.5538 66.7781C52.5538 66.9858 52.7156 67.1541 52.9153 67.1541Z"
              className="particle p6"
            ></path>
            <path
              fill="url(#paint9_linear_204_217)"
              d="M52.1936 43.8394C52.7904 43.8394 53.2743 43.3344 53.2743 42.7113C53.2743 42.0883 52.7904 41.5832 52.1936 41.5832C51.5967 41.5832 51.1129 42.0883 51.1129 42.7113C51.1129 43.3344 51.5967 43.8394 52.1936 43.8394Z"
              className="particle p7"
            ></path>
            <path
              fill="url(#paint10_linear_204_217)"
              d="M57.2367 29.5497C57.8335 29.5497 58.3173 29.0446 58.3173 28.4216C58.3173 27.7985 57.8335 27.2935 57.2367 27.2935C56.6398 27.2935 56.156 27.7985 56.156 28.4216C56.156 29.0446 56.6398 29.5497 57.2367 29.5497Z"
              className="particle p8"
            ></path>
            <path
              fill="url(#paint11_linear_204_217)"
              d="M43.9084 34.8144C44.3063 34.8144 44.6289 34.4777 44.6289 34.0623C44.6289 33.647 44.3063 33.3102 43.9084 33.3102C43.5105 33.3102 43.188 33.647 43.188 34.0623C43.188 34.4777 43.5105 34.8144 43.9084 34.8144Z"
              className="particle p9"
            ></path>
          </g>
          <g id="reflectores">
            <path
              fill-opacity="0.2"
              fill="url(#paint12_linear_204_217)"
              d="M49.2037 57.0009L68.7638 68.7786C69.6763 69.3089 69.7967 69.9684 69.794 70.1625V13.7383C69.7649 13.5587 69.6807 13.4657 69.4338 13.3096L48.4832 0.601307C46.9202 -0.192595 46.0788 -0.208238 44.6446 0.601307L23.6855 13.2118C23.1956 13.5876 23.1966 13.7637 23.1956 14.4904L23.246 70.1625C23.2948 69.4916 23.7327 69.0697 25.1768 68.2447L43.9084 57.0008C44.8268 56.4344 45.3776 56.2639 46.43 56.2487C47.5299 56.2257 48.1356 56.4222 49.2037 57.0009Z"
            ></path>
            <path
              fill-opacity="0.2"
              fill="url(#paint13_linear_204_217)"
              d="M48.8867 27.6696C49.9674 26.9175 68.6774 14.9197 68.6774 14.9197C69.3063 14.5327 69.7089 14.375 69.7796 13.756V70.1979C69.7775 70.8816 69.505 71.208 68.7422 71.7322L48.9299 83.6603C48.2003 84.1258 47.6732 84.2687 46.5103 84.2995C45.3295 84.2679 44.8074 84.1213 44.0907 83.6603L24.4348 71.8149C23.5828 71.3313 23.2369 71.0094 23.2316 70.1979L23.1884 13.9816C23.1798 14.8398 23.4982 15.3037 24.7518 16.0874C24.7518 16.0874 42.7629 26.9175 44.2038 27.6696C45.6447 28.4217 46.0049 28.4217 46.5452 28.4217C47.0856 28.4217 47.806 28.4217 48.8867 27.6696Z"
            ></path>
          </g>
          <g id="panel-rigth">
            <mask fill="white" id="path-26-inside-1_204_217">
              <path d="M72 91.8323C72 90.5121 72.9268 88.9068 74.0702 88.2467L87.9298 80.2448C89.0731 79.5847 90 80.1198 90 81.44V81.44C90 82.7602 89.0732 84.3656 87.9298 85.0257L74.0702 93.0275C72.9268 93.6876 72 93.1525 72 91.8323V91.8323Z"></path>
            </mask>
            <path
              fill="#91DDFB"
              d="M72 91.8323C72 90.5121 72.9268 88.9068 74.0702 88.2467L87.9298 80.2448C89.0731 79.5847 90 80.1198 90 81.44V81.44C90 82.7602 89.0732 84.3656 87.9298 85.0257L74.0702 93.0275C72.9268 93.6876 72 93.1525 72 91.8323V91.8323Z"
            ></path>
            <path
              mask="url(#path-26-inside-1_204_217)"
              fill="#489CB7"
              d="M72 89.4419L90 79.0496L72 89.4419ZM90.6928 81.44C90.6928 82.9811 89.6109 84.8551 88.2762 85.6257L74.763 93.4275C73.237 94.3085 72 93.5943 72 91.8323V91.8323C72 92.7107 72.9268 92.8876 74.0702 92.2275L87.9298 84.2257C88.6905 83.7865 89.3072 82.7184 89.3072 81.84L90.6928 81.44ZM72 94.2227V89.4419V94.2227ZM88.2762 80.0448C89.6109 79.2742 90.6928 79.8989 90.6928 81.44V81.44C90.6928 82.9811 89.6109 84.8551 88.2762 85.6257L87.9298 84.2257C88.6905 83.7865 89.3072 82.7184 89.3072 81.84V81.84C89.3072 80.5198 88.6905 79.8056 87.9298 80.2448L88.2762 80.0448Z"
            ></path>
            <mask fill="white" id="path-28-inside-2_204_217">
              <path d="M67 94.6603C67 93.3848 67.8954 91.8339 69 91.1962V91.1962C70.1046 90.5584 71 91.0754 71 92.3509V92.5129C71 93.7884 70.1046 95.3393 69 95.977V95.977C67.8954 96.6147 67 96.0978 67 94.8223V94.6603Z"></path>
            </mask>
            <path
              fill="#91DDFB"
              d="M67 94.6603C67 93.3848 67.8954 91.8339 69 91.1962V91.1962C70.1046 90.5584 71 91.0754 71 92.3509V92.5129C71 93.7884 70.1046 95.3393 69 95.977V95.977C67.8954 96.6147 67 96.0978 67 94.8223V94.6603Z"
            ></path>
            <path
              mask="url(#path-28-inside-2_204_217)"
              fill="#489CB7"
              d="M67 92.3509L71 90.0415L67 92.3509ZM71.6928 92.5129C71.6928 94.0093 70.6423 95.8288 69.3464 96.577L69.3464 96.577C68.0505 97.3252 67 96.7187 67 95.2223V94.8223C67 95.6559 67.8954 95.8147 69 95.177L69 95.177C69.7219 94.7602 70.3072 93.7465 70.3072 92.9129L71.6928 92.5129ZM67 97.1317V92.3509V97.1317ZM69.2762 91.0367C70.6109 90.2661 71.6928 90.8908 71.6928 92.4319V92.5129C71.6928 94.0093 70.6423 95.8288 69.3464 96.577L69 95.177C69.7219 94.7602 70.3072 93.7465 70.3072 92.9129V92.7509C70.3072 91.4754 69.7219 90.7794 69 91.1962L69.2762 91.0367Z"
            ></path>
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="92.0933"
              x2="92.5421"
              y1="92.0933"
              x1="1.00946"
              id="paint0_linear_204_217"
            >
              <stop stop-color="#5727CC"></stop>
              <stop stop-color="#4354BF" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="91.1638"
              x2="6.72169"
              y1="70"
              x1="92.5"
              id="paint1_linear_204_217"
            >
              <stop stop-color="#4559C4"></stop>
              <stop stop-color="#332C94" offset="0.29"></stop>
              <stop stop-color="#5727CB" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="85.0762"
              x2="3.55544"
              y1="70"
              x1="92.5"
              id="paint2_linear_204_217"
            >
              <stop stop-color="#91DDFB"></stop>
              <stop stop-color="#8841D5" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="32.558"
              x2="43.5482"
              y1="28.7976"
              x1="43.5482"
              id="paint3_linear_204_217"
            >
              <stop stop-color="#5927CE"></stop>
              <stop stop-color="#91DDFB" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="48.3519"
              x2="50.0323"
              y1="44.5915"
              x1="50.0323"
              id="paint4_linear_204_217"
            >
              <stop stop-color="#5927CE"></stop>
              <stop stop-color="#91DDFB" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="62.6416"
              x2="40.3062"
              y1="59.6332"
              x1="40.3062"
              id="paint5_linear_204_217"
            >
              <stop stop-color="#5927CE"></stop>
              <stop stop-color="#91DDFB" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="73.9229"
              x2="50.7527"
              y1="68.6583"
              x1="50.7527"
              id="paint6_linear_204_217"
            >
              <stop stop-color="#5927CE"></stop>
              <stop stop-color="#91DDFB" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="76.9312"
              x2="48.5913"
              y1="74.675"
              x1="48.5913"
              id="paint7_linear_204_217"
            >
              <stop stop-color="#5927CE"></stop>
              <stop stop-color="#91DDFB" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="67.1541"
              x2="52.9153"
              y1="66.402"
              x1="52.9153"
              id="paint8_linear_204_217"
            >
              <stop stop-color="#5927CE"></stop>
              <stop stop-color="#91DDFB" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="43.8394"
              x2="52.1936"
              y1="41.5832"
              x1="52.1936"
              id="paint9_linear_204_217"
            >
              <stop stop-color="#5927CE"></stop>
              <stop stop-color="#91DDFB" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="29.5497"
              x2="57.2367"
              y1="27.2935"
              x1="57.2367"
              id="paint10_linear_204_217"
            >
              <stop stop-color="#5927CE"></stop>
              <stop stop-color="#91DDFB" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="34.8144"
              x2="43.9084"
              y1="33.3102"
              x1="43.9084"
              id="paint11_linear_204_217"
            >
              <stop stop-color="#5927CE"></stop>
              <stop stop-color="#91DDFB" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="16.0743"
              x2="62.9858"
              y1="88.5145"
              x1="67.8638"
              id="paint12_linear_204_217"
            >
              <stop stop-color="#97E6FF"></stop>
              <stop stop-opacity="0" stop-color="white" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="39.4139"
              x2="31.4515"
              y1="88.0938"
              x1="36.2597"
              id="paint13_linear_204_217"
            >
              <stop stop-color="#97E6FF"></stop>
              <stop stop-opacity="0" stop-color="white" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>
      </section>) : (<>
      <h3 className="text-3xl font-bold mb-12 text-center">Latest Blogs</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h4 className="text-xl text-[#d8d7d7] font-semibold mb-2">
              {blog.pat_name}
            </h4>
            <p className="text-gray-400 text-sm">{blog.address}</p>
          </div>
        ))}
        <div
          className="flex w-[90vw] justify-end"
          onClick={() => navigate(`/`)}
        >
          <button className="relative cursor-pointer text-[1.4rem] rounded-[16px] border-0 p-[2px] bg-[radial-gradient(circle_80px_at_80%_-10%,#ffffff,#181b1b)] after:content-[''] after:absolute after:w-[65%] after:h-[60%] after:rounded-[120px] after:top-0 after:right-0 after:shadow-[0_0_20px_#ffffff38] after:-z-10">
            <div className="absolute bottom-0 left-0 w-[70px] h-full rounded-[16px] bg-[radial-gradient(circle_60px_at_0%_100%,#3fe9ff,#0000ff80,transparent)] shadow-[-10px_10px_30px_#0051ff2d]"></div>
            <div className="relative z-[3] rounded-[14px] px-[25px] py-[14px] text-white bg-[radial-gradient(circle_80px_at_80%_-50%,#777777,#0f1111)] before:content-[''] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:rounded-[14px] before:bg-[radial-gradient(circle_60px_at_0%_100%,#00e1ff1a,#0000ff11,transparent)]">
              Realism
            </div>
          </button>
        </div>
      </div>
      </>)}
    </section>
    </>
  );
};

export default Blogs;
