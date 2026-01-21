import { MongoDBIcon, MySQLIcon, PostgresSQLIcon } from "../components/Icon";
import { TECH_STACK } from "../constants/constants";

export default function Database() {
  return (
    <>
      <div className="text-xl mx-2 underline underline-offset-8 font-bold">
        {TECH_STACK.Database.Heading}
      </div>
      {/* MySQL */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <MySQLIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Database.Mysql.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Database.Mysql.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* PostgresSQL */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <PostgresSQLIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Database.PostgreSql.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Database.PostgreSql.Desc}
            </p>
          </div>
        </div>
      </div>

      {/* MongoDB */}
      <div className="hero bg-gray-600 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <MongoDBIcon className="w-[100px] h-[100px] rounded-full bg-base-400" />
          <div>
            <h1 className="text-3xl font-bold">
              {TECH_STACK.Database.MongoDb.Title}
            </h1>
            <p className="py-4 text-md font-bold">
              {TECH_STACK.Database.MongoDb.Desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
