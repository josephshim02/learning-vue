import {ref, watch} from 'vue';

export function useStorage(key, defaultval = null) {
  let storedVal = read(key);

  let val = ref(defaultval);
  if (storedVal) {
    val = ref(storedVal);
  } else {
    write();
  }

  watch(val, write, {deep: true});

  function read (key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function write () {
    if(val.value === "" || val.value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key,JSON.stringify(val.value));
    }
  }

  return val;
}
