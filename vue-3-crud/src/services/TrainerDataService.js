import http from "../https-common";
class TrainerDataService {
  getAll() {
    return http.get("/trainers");
  }
  create(data) {
    return http.post("/trainer", data);
  }
  update(id, data) {
    return http.put(`/trainers/${id}`, data);
  }
}
export default new TrainerDataService();