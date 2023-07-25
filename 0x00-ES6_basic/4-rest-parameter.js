export default function returnHowManyArguments(...args) {
  // The length of the args array is num of rest params passed
  return args.length;
}
