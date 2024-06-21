import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InternetStatusList } from "./internetStatus/InternetStatusList";
import { InternetStatusCreate } from "./internetStatus/InternetStatusCreate";
import { InternetStatusEdit } from "./internetStatus/InternetStatusEdit";
import { InternetStatusShow } from "./internetStatus/InternetStatusShow";
import { MeasurementList } from "./measurement/MeasurementList";
import { MeasurementCreate } from "./measurement/MeasurementCreate";
import { MeasurementEdit } from "./measurement/MeasurementEdit";
import { MeasurementShow } from "./measurement/MeasurementShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"IoTBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="InternetStatus"
          list={InternetStatusList}
          edit={InternetStatusEdit}
          create={InternetStatusCreate}
          show={InternetStatusShow}
        />
        <Resource
          name="Measurement"
          list={MeasurementList}
          edit={MeasurementEdit}
          create={MeasurementCreate}
          show={MeasurementShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
