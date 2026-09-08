import Dashboard from "@/components/modules/dashboard/dashboardPage";
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
