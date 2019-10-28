import React from 'react';

const GiftList = () => {
  return (
    <section className="gift-table">
      <table className="table-gift">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-image">
              <img
                src="https://i.ebayimg.com/images/g/WG8AAOSw5PRdb49l/s-l300.png"
                height={200}
                width={180}
              />
            </td>
            <td className="table-text">
              <a href="https://www.lego.com/en-gb/product/series-19-71025">LEGO Minifigures blind bag</a>
            </td>
            <td className="table-text">
              <p>£2.99</p>
            </td>
            <td className="table-text">
              <p></p>
            </td>
          </tr>
          <tr>
            <td className="table-image">
              <img
                src="https://storemedia.nintendo.com/ui/images/devices/switch/software/switch-legendofzelda-breathofthewild-640x480.png"
                height={200}
                width={220}
              />
            </td>
            <td className="table-text">
              <a href="https://www.amazon.co.uk/Legend-Zelda-Breath-Nintendo-Switch/dp/B01N1083WZ/ref=asc_df_B01N1083WZ/?tag=googshopuk-21&linkCode=df0&hvadid=310694401667&hvpos=1o1&hvnetw=g&hvrand=11210629286154802326&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044990&hvtargid=pla-564457057881&psc=1&th=1&psc=1">
                The Legend of Zelda: Breath of the Wild
              </a>
            </td>
            <td className="table-text">
              <p>£47.99</p>
            </td>
            <td className="table-text">
              <p></p>
            </td>
          </tr>
          <tr>
            <td className="table-image">
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQhp3XUnuIiq-I5w11AP_C79hS-m1DF2amHvePoN-17UbvEyitIhjHAvZ-T56rgiTbExka-FCiBMrEnFySuAxvn72VfWAqWXBLLBp6a8nUh&usqp=CAE"
                height={190}
                width={170}
              />
            </td>
            <td className="table-text">
              <a href="https://www.game.co.uk/en/the-outer-worlds-2623343?cm_mmc=Google+Shopping-_-Mint+Software-_-Mint+Software-_-+-+&gclid=Cj0KCQjwgNXtBRC6ARIsAIPP7Ru8M41ahDqqJ3q4imHpcPW3Ju57aWZx6wx5jt_14ZPiqGxaixzl2u8aAvxLEALw_wcB">
                The Outer Worlds
              </a>
            </td>
            <td className="table-text">
              <p>£49.99</p>
            </td>
            <td className="table-text">
              <p></p>
            </td>
          </tr>
          <tr>
            <td className="table-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR2FUgkn9CYaK31ZQ6Metw7QJPiDE-5lTnp5FcstIejB-r6Xe8kw2_B11vltYEMFd--2kNf8sPQFLJyTl38cxisK0QstZ9Kig&usqp=CAY"
                height={200}
                width={200}
              />
            </td>
            <td className="table-text">
              <a href="https://www.sportsdirect.com/adidas-arsenal-home-shirt-2019-2020-377220?gclid=Cj0KCQjwgNXtBRC6ARIsAIPP7RvpmEH77kUknno2JGwe-HOc-tqxuMcR4wti7Eop04o7xYFmWfTI6Q0aAuR4EALw_wcB#colcode=37722008">
                Arsenal 2019/20 Home Shirt
              </a>
            </td>
            <td className="table-text">
              <p>£54.99</p>
            </td>
            <td className="table-text">
              <p>Size: M</p>
            </td>
          </tr>
          <tr>
            <td className="table-image">
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS7PyzOmVkevK5Wd5TA9kd2RneztQAwRwoYBm9gGJkEPncSg4KRno1yKAgWgqhdkh-u2lIXFLk4Ywa3sFJmmq3CoYJmitxdRg&usqp=CAY"
                height={200}
                width={200}
              />
            </td>
            <td className="table-text">
              <a href="https://www.sportsdirect.com/adidas-arsenal-away-shirt-2019-2020-377233?gclid=Cj0KCQjwgNXtBRC6ARIsAIPP7RsAt13MbH3-52wl1vtRCR0s4kKqZYCa04eZeclODeQYFgNxfdJCFNYaAsavEALw_wcB#colcode=37723313">
                Arsenal 2019/20 Away Shirt
              </a>
            </td>
            <td className="table-text">
              <p>£54.99</p>
            </td>
            <td className="table-text">
              <p>Size: M</p>
            </td>
          </tr>
          <tr>
            <td className="table-image">
              <img
                src=""
                height={200}
                width={200}
              />
            </td>
            <td className="table-text">
              <a href="">
                Placeholder
              </a>
            </td>
            <td className="table-text">
              <p>£</p>
            </td>
            <td className="table-text">
              <p>Placeholder</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default GiftList;
