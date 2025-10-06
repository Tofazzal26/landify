import React from "react";

const Talk = () => {
  return (
    <div className="bg-[#295c51] lg:py-20 py-10">
      <div className="container mx-auto lg:px-0 px-2">
        <div className="flex lg:flex-row flex-col lg:items-center justify-between">
          <div className="text-white">
            <h2 className="lg:text-5xl text-3xl font-semibold lg:w-[480px] lg:leading-[60px]">
              {"Let's"} talk about{" "}
              <span className="text-[#e9bb71]">working together</span>
            </h2>
            <p className="lg:text-lg text-base lg:w-[450px] py-6">
              Need a quick question answered? Our support team is available to
              answer any queries seven days a week.
            </p>
            <h4 className="lg:text-xl text-lg font-medium">
              Contact information:
            </h4>
            <p className="lg:text-lg text-base mt-2">
              Email: hello@company.com
            </p>
            <p className="lg:text-lg text-base">Phone: +1 (215) 555-1122</p>
          </div>
          <div className="lg:mt-0 mt-4">
            <div className="flex lg:flex-row flex-col gap-5 lg:items-center">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-lg text-[#404040] px-5 py-3 outline-none bg-white w-full lg:w-[280px]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company name"
                  className="rounded-lg text-[#404040] px-5 py-3 outline-none bg-white w-full lg:w-[280px]"
                />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-5 lg:items-center mt-5">
              <div>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="rounded-lg text-[#404040] px-5 py-3 outline-none bg-white w-full lg:w-[280px]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="rounded-lg text-[#404040] px-5 py-3 outline-none bg-white w-full lg:w-[280px]"
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                id=""
                placeholder="Anything else you would like us to know?"
                rows={5}
                className="w-full rounded-lg text-[#404040] px-5 py-3 outline-none bg-white mt-5"
              ></textarea>
              <button className="bg-[#e9bb71] w-full px-6 py-3 rounded-lg font-medium mt-3">
                Submit request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talk;
