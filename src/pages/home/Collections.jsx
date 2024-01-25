const Collections = () => {
  return (
    <div className=" bg-[url(/images/collection-bg.png)] bg-cover bg-no-repeat bg-center lg:px-28 px-4 ">
      <div className="h-[500px] flex justify-between flex-col md:flex-row items-center">
        <div className="md:w-1/2"></div>

        <div className="md:w-1/2 pb-8">
          <img src="/images/zara-logo.png" alt="" />
          <p className="text-lg text-white capitalize md:w-2/3 my-8 leading-8">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>

          <button className="px-6 py-2 bg-white text-black rounded-sm font-semibold">
            see collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
