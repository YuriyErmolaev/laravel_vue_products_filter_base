import axiosInstance from "./axios";

class DataService {
    
  getList(count = 10, page = 1, sort , dir, filter) {

      let url = this.url

      return axiosInstance.get(
        url, 
        {
          params: {
            count: count,
            page: page,
            sort: sort,
            dir: dir,          
            filter: filter
          }
        }
       
      );

  }
  getById(id) {
    return axiosInstance.get(this.url + "/" + id,{
        params: {id}
    });
  }
  get(url) {
    return axiosInstance.get(url);
  }
}

export default new DataService();
