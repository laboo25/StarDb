import React from 'react'
import '../Navbar/Home.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
const Home = () => {
  return (
    <>
      <div className=' w-full'>
        <Navbar />
        <div className="containerwr">

          <div className="cards">
            <div className="bg">
              <Link to="/AbellaDanger">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/abellaDanger—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>abella danger</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="/alexaGrace">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/alexaGrace—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>alexa grace</h6>
          </div>

          <div className="cards">
            <div className="bg">
              <Link to="./pages/arianaMarie">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/arianaMarie—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>ariana Marie </h6>
          </div>

          <div className="cards">
            <div className="bg">
              <Link to="./pages/augustAmes">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/augustAmes—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>August ames</h6>
          </div>

          <div className="cards">
            <div className="bg">
              <Link to="./pages/averyCristy">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/averyCristy—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>avery cristy</h6>
          </div>

          <div className="cards">
            <div className="bg">
              <Link to="/bellaRolland">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/bellaRolland—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>bella rolland</h6>
          </div>

          {/* <div className="cards star">
<div className="bg">
<Link to="./pages/blakeEden">
<div className="imgs">
<img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/blakeEden—index.jpg" />
</div>
</Link>
</div>
<h6>blake eden</h6>
</div>  */}

          {/* <div className="cards star">
<div className="bg">
<Link to="./pages/bunnyColby">
<div className="imgs">
<img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/bunnyColby—index.jpg" />
</div>
</Link>
</div>
<h6>bunny colby</h6>
</div>  */}

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/caseyCalvert">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/caseyCalvert—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>Casey calvert</h6>
          </div>

          <div className="cards">
            <div className="bg">
              <Link to="./pages/charlieRed">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/charlieRed—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>Charlie red</h6>
          </div>

          {/* <div className="cards star">
<div className="bg">
<Link to="./pages/danniRivers">
<div className="imgs">
<img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/danniRivers—index.jpg" />
</div>
</Link>
</div>
<h6>danni rivers</h6>
</div>  */}

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/emilyWillis">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/emilyWillis—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>emily willis</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/evaElfie">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/evaElfie—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>Eva Elfie</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/evelynClaire">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/evelynClaire—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>evelyn claire</h6>
          </div>

          <div className="cards">
            <div className="bg">
              <Link to="./pages/elsaJean">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/elsaJean—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>elsa jean</h6>
          </div>

          {/* <div className="cards star">
<div className="bg">
<Link to="./pages/freyaMayer">
<div className="imgs">
<img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/freyaMayer—index.jpg" />
</div>
</Link>
</div>
<h6>freya mayer</h6>
</div>  */}

          <div className="cards">
            <div className="bg">
              <Link to="./pages/giannaDior">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/giannaDior—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>gianna Dior</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/gloriaSol">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/gloriaSol—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>gloria sol</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/haleyReed">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/haleyReed—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>haley reed</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/hazelMoore">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/hazelMoore—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>hazel moore</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/ivyAura">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/ivyAura—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>ivy aura</h6>
          </div>

          {/* <div className="cards star">
<div className="bg">
<Link to="./pages/izzyLush">
<div className="imgs">
<img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/izzyLush—index.jpg" />
</div>
</Link>
</div>
<h6>izzy lush</h6>
</div>  */}

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/janiceGriffith">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/janiceGriffith―index.jpg" />
                </div>
              </Link>
            </div>
            <h6>Janice griffith</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/jayeSummers">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/jayeSummers—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>JAYE summers</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/jessieSaint">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/jessieSaint—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>jessie Saint</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/jiaLissa">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/jiaLissa—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>jia Lissa</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/jillianJanson">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/jillianJanson—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>Jillian Janson</h6>
          </div>

          <div className="cards">
            <div className="bg">
              <Link to="./pages/jillKassidy">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/jillKassidy—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>jill Kassidy</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/kendraSunderland">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/kendraSunderland—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>kendraSunderland</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/kennaJames">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/kennaJames—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>kenna James</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/kristenScott">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/kristenScott—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>kristen scott</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/kylerQquinn">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/kylerQuinn—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>kyler quinn</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/lanaRhoades">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/lanaRhoades—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>lana rhoades</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/leahGotti">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/leahGotti—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>leah gotti</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/lenaAnderson">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/lenaAnderson—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>lena Anderson</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/lenaReif">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/lenaReif—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>lena Reif</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/littleCaprice">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/littleCaprice—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>Little Caprice</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/liyaSilver">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/liyaSilver—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>liya silver</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/maddyMay">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/maddyMay—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>maddy may</h6>
          </div>

          <div className="cards">
            <div className="bg">
              <Link to="./pages/melenaMariaRya">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/melenaMariaRya—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>melena maria rya</h6>
          </div>

          {/* <div className="cards star">
<div className="bg">
<Link to="./pages/melodyMarks">
<div className="imgs">
<img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/melodymarks—index.jpg" />
</div>
</Link>
</div>
<h6>melody marksy</h6>
</div>  */}

          <div className="cards star">
            <div className="bg">
              <Link to="/milaAzul">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/milaAzul—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>mila azul</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/mollyLittle">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/mollyLittle—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>molly little</h6>
          </div>

          <div className="cards">
            <div className="bg">
              <Link to="./pages/nancyAce">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/nancyAce—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>nancy ace</h6>
          </div>

          <div className="cards">
            <div className="bg">
              <Link to="./pages/naomiSwann">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/naomiSwann—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>naomi Swann</h6>
          </div>

          {/* <div className="cards star">
<div className="bg">
<Link to="./pages/riaSunn">
<div className="imgs">
<img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/riaSunn—index.jpg" />
</div>
</Link>
</div>
<h6>ria sunn</h6>
</div>  */}

          <div className="cards">
            <div className="bg">
              <Link to="./pages/rikaFane">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/rikaFane—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>Rika fane</h6>
          </div>

          <div className="cards">
            <div className="bg">
              <Link to="./pages/rileyReid">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/rileyReid—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>riley Reid</h6>
          </div>

          <div className="cards">
            <div className="bg">
              <Link to="./pages/scarlitScandal">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/scarlitScandal—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>scarlit scandal</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="./pages/stacyCruz">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/stacyCruz—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>stacy cruz</h6>
          </div>

          {/* <div className="cards star">
<div className="bg">
<Link to="./pages/sybil">
<div className="imgs">
<img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/sybil—index.jpg" />
</div>
</Link>
</div>
<h6>sybil</h6>
</div>  */}

          <div className="cards star">
            <div className="bg">
              <Link to="./tiffanyTatum">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/tiffanyTatum—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>tiffany tatum</h6>
          </div>

          <div className="cards star">
            <div className="bg">
              <Link to="/toriBlack">
                <div className="imgs">
                  <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/toriBlack—index.jpg" />
                </div>
              </Link>
            </div>
            <h6>tori black</h6>
          </div>

          {/* <div className="cards star">
<div className="bg">
<Link to="./pages/umaJolie">
<div className="imgs">
<img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/umaJolie—index.jpg" />
</div>
</Link>
</div>
<h6>uma jolie</h6>
</div>  */}




        </div>
      </div>
    
    
    
    </>
  )
}

export default Home
