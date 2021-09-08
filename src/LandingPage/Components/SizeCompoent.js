import React from "react";

export default function SizeComponent(Props) {
  return (
    <div>
      {Props.Product.size ? (
        Props.Type === "UnderScore" ? (
          <div>
            <div className="LandingPageBodySizeHead">Select Size (UK Size)</div>
            <div className="LandingPageBodySize">
              {Props.Product.size.map((sizes) => {
                return (
                  <div key={sizes.name}>
                    <button
                      type="button"
                      className={
                        Props.SizeImage === ""
                          ? sizes.name === Props.Product.size[0].name
                            ? "LandingPageBodySizeMapActive"
                            : "LandingPageBodySizeMap"
                          : sizes.name === Props.SizeImage
                          ? "LandingPageBodySizeMapActive"
                          : "LandingPageBodySizeMap"
                      }
                      onClick={() => Props.SetSizeImage(sizes.name)}
                    >
                      {sizes.name}
                    </button>
                    <div
                      className={
                        Props.SizeImage === ""
                          ? sizes.name === Props.Product.size[0].name
                            ? "LandingPageBodySizeUnderlineMapActive"
                            : "LandingPageBodySizeUnderlineMap"
                          : sizes.name === Props.SizeImage
                          ? "LandingPageBodySizeUnderlineMapActive"
                          : "LandingPageBodySizeUnderlineMap"
                      }
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="LandingPageBodySizeHead">
            Select Size :
            <select className="LandingPageBodySizeOptions">
              {Props.Product.size.map((sizes) => {
                return (
                  <option
                    className="LandingPageBodySizeOptionsMap"
                    key={sizes.name}
                  >
                    {sizes.name} UK
                  </option>
                );
              })}
            </select>
          </div>
        )
      ) : (
        <div />
      )}
    </div>
  );
}
