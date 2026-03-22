/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(pname: string): string {
  let argument: string= "";

  if(pname){
    argument = `One for ${pname}, one for me.`;
  }else{
    argument = "One for you, one for me.";
  }

  return argument;
}
