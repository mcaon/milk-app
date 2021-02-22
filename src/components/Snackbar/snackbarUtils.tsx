let snackRef: any = null;

function setRef(ref: any) {
  snackRef = ref;
}

function setSnackbarInfos(text: string, open = true) {
  snackRef.setInfos({ text }, true);
}

function closeSnackbar() {
  snackRef.closeSnackbar();
}

export { setRef, setSnackbarInfos, closeSnackbar };
