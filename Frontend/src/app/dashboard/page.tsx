import Dashboard from "@/src/component/modules/dashboard/dashboardPage";
import React from "react";

type PageProps = {
  searchParams: Promise<{ boardModal: string }>;
};

const page = async ({ searchParams }: PageProps) => {
  return (
    <div>
      <Dashboard searchParams={searchParams} />
    </div>
  );
};

export default page;
