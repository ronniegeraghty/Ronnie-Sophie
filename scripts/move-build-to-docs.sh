#!/bin/bash

rm -R docs
mkdir docs

srcdir="build"
dstdir="docs"

for f in ${srcdir}/*
do
    cp -r $f $dstdir
done