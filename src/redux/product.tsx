export const SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const setProductDetails = (details) => ({
  type: SET_PRODUCT_DETAILS,
  payload: details,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
