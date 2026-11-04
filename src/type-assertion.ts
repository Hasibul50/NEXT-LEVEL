type status = "pending" | "approved" | "rejected";
const someStatus: string = "pending";
const showStatus = (status: status) => {
  console.log("show status: ", status);
};
showStatus(someStatus as status);

interface Config {
  port?: number;
}
const config: Config = {
  port: 432,
};
const currentPort: number = config.port!;
// ! or const currentPort :number = config.port as number;
console.log(currentPort);
// object lockdown

const configuration = {
  port : 8080,
  prefix:"sariyun islam"
}
configuration.port=342;
