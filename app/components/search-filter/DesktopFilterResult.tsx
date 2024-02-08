import React from 'react';

function DesktopFilterResult() {
  return (
    <div>
      <div className="flex flex-col">
        <form method="GET" className="h-full">
          <fieldset className="relative flex h-full flex-col gap-4">
            <div>
              <label className="flex flex-col gap-2 ">
                <span className="text-md">Sort Results By:</span>
                <select className="border text-sm" name="sortBy">
                  <option value="newest">Date: Newest</option>
                  <option value="oldest">Date: Oldest</option>
                  <option value="highToLow">Price: High to Low</option>
                  <option value="lowToHigh">Price: Low to High</option>
                </select>
              </label>
            </div>

            <div>
              <label className="flex flex-col">
                <span className="text-md">Filter Ads By:</span>
                <label className="flex items-center justify-start gap-2 text-sm">
                  <input type="checkbox" name="urgent" />
                  Urgent
                </label>
                <label className="flex items-center justify-start gap-2 text-sm">
                  <input type="checkbox" name="featured" />
                  Featured
                </label>
              </label>
            </div>

            <div>
              <label className="flex flex-col gap-2 ">
                <span className="text-md">Type of Poster:</span>
                <select className="border text-sm" name="typeOfPoster">
                  <option value="all">All</option>
                  <option value="member">Member</option>
                  <option value="authorizedAgent">Authorized Agen</option>
                  <option value="nonMember">Non-members</option>
                </select>
              </label>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default DesktopFilterResult;
