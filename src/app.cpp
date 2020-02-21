#include <server.h>
#include <search.h>

using namespace ucm;


int main(int argc, char** argv){

    // Do not delete this line. It initializes the data store.
    init();

    Server server(argc, argv);

    server.renderHTML("/", "index.html");

    server.route("/search", [&](const request& req, response& res){
        // Provide your code here. 
        ucm::json temp;
        temp["message"] = "It works!";
        //res.sendJSON(temp);

        if(req.has_params({"q"})){
            std::string q = req.url_params.get("q");

            ucm::json resp = search(q);

            res.sendJSON(resp);
        }


    });

    server.run();
}
