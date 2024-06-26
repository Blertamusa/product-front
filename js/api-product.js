class ApiProduct {
    url = 'http://localhost:8080/products';

    async getAll() {
        const response = await fetch(this.url); 
        return await response.json();
    }
    async findById(productId) {
        const response = await fetch(this.url + "/" + productId); 
        return await response.json();
    }
    async removeById(productId) {
        const response = await fetch(this.url  + "/" + productId, {
            method: 'DELETE' 
    });
    return await response.text();
}
  async register(product) {
    const response = await fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.text();
}

  async modify(productId, product) {
    const response = await fetch(this.url + "/" + productId, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.text();
  }
  async update(productId, product) {
    const response = await fetch(this.url + "/" + productId, {
      method: "PATCH",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.text();
  }
}