# cbm
1 get swagger-codegen.jar
2 get swagger.json
java -jar swagger-codegen-cli.jar generate -i swagger.json -l nodejs-server -o cbm
modify api/swagger.json basepath to /cb/api
