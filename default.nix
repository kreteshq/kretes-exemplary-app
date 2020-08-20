{ pkgs ? import <nixpkgs> {}
}:
pkgs.mkShell {
  name = "taskiapp-environment";
  buildInputs = [
    pkgs.nodejs-14_x
    pkgs.postgresql_12
  ];
  shellHook = ''
    export PGDATA=./db/content
    export PGPORT=5454
  '';
}
