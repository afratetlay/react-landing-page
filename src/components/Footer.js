import React from "react";
// import data
import { footer } from "../data";
// import components
import Copyright from "../components/Copyright";

const Footer = () => {
  // destructure footer data
  const { logo, links, legal, newsletter, form } = footer;
  return (
    <footer>
      <div className="container mx-auto">
        <div>
          {/* logo */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* list 1 */}
          <div>
            <div className="text-2xl uppercase font-medium mb-6">Links</div>
            <ul className="flex flex-col gap-y-3">
              {links.map((item, index) => {
                // destructure item
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      className="font-medium hover:text-accent transition"
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* list 2 */}
          <div>
            <div className="text-2xl uppercase font-medium mb-6">Legal</div>
            <ul className="flex flex-col gap-y-3">
              {links.map((item, index) => {
                // destructure item
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      className="font-medium hover:text-accent transition"
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* newsletter */}
          <div>
            <div>{newsletter.title}</div>
            <div>{newsletter.subtitle}</div>
            {/* form */}
            <form className="max-w-[349px] mb-[10px]">
              <div className="h-[62px] p-[7px] flex border border-dark rounded-lg">
                <input
                  className="w-full h-full pl-6 border-none outline-none placeholder:text-dark"
                  type="text"
                  placeholder={form.placeholder}
                />
                <button className="btn btn-sm bg-accent hover:bg-accentHover w-[102px] text-white">
                  {form.btnText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
