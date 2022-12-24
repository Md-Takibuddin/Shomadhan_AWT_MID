const Notes = () => {
   return (
      <section className="w-full">
         <h3 className="header-1 mb-4">Notes</h3>

         {/* <!-- Container --> */}
         <div className="w-full | p-5 rounded-xl bg-white | flex flex-col space-y-5">
            {/* <!-- Item --> */}
            <div className="grid grid-cols-12 w-full">
               <img
                  className="col-span-1 h-[60px] w-[60px] rounded-xl"
                  src="storage/ui-photos/dashboard/notes/Group 54.png"
                  alt=""
               />
               <div className="col-span-11 | flex flex-col justify-center">
                  <span className="font-medium text-xl">
                     Math 2 - Chapter 5
                  </span>
                  <span className="text-light_gray text-sm">
                     Uploaded 10 Sep, 2022
                  </span>
               </div>
            </div>

            {/* <!-- Item --> */}
            <div className="grid grid-cols-12 w-full">
               <img
                  className="col-span-1 h-[60px] w-[60px] rounded-xl"
                  src="storage/ui-photos/dashboard/notes/Group 55.png"
                  alt=""
               />
               <div className="col-span-11 | flex flex-col justify-center">
                  <span className="font-medium text-xl">
                     Physics 1 - Chapter 2
                  </span>
                  <span className="text-light_gray text-sm">
                     Uploaded 10 Sep, 2022
                  </span>
               </div>
            </div>
            {/* <!-- Item --> */}
            <div className="grid grid-cols-12 w-full">
               <img
                  className="col-span-1 h-[60px] w-[60px] rounded-xl"
                  src="storage/ui-photos/dashboard/notes/Group 56.png"
                  alt=""
               />
               <div className="col-span-11 | flex flex-col justify-center">
                  <span className="font-medium text-xl">
                     Chemistry 2 - Chapter 6
                  </span>
                  <span className="text-light_gray text-sm">
                     Uploaded 10 Sep, 2022
                  </span>
               </div>
            </div>
            {/* <!-- Item --> */}
            <div className="grid grid-cols-12 w-full">
               <img
                  className="col-span-1 h-[60px] w-[60px] rounded-xl"
                  src="storage/ui-photos/dashboard/notes/Group 54.png"
                  alt=""
               />
               <div className="col-span-11 | flex flex-col justify-center">
                  <span className="font-medium text-xl">
                     Math 2 - Chapter 5
                  </span>
                  <span className="text-light_gray text-sm">
                     Uploaded 10 Sep, 2022
                  </span>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Notes;
