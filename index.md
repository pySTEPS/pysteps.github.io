<div class="collapse navbar-collapse" id="plumage-navbar-collapse-1">
<ul class="nav navbar-nav">
<li ><a href="/">Home</a> </li>
  <li ><a href="/documentation/">Documentation</a></li>
  <li ><a href="/community/">Literature</a></li>
  <li ><a href="/about/">About</a></li>
</ul>
</div>

[logo]: https://avatars3.githubusercontent.com/u/40021569?s=200&v=4
![alt text][logo]

[https://github.com/pySTEPS](https://github.com/pySTEPS) (repository)

The pySTEPS initiative  is a community that develops and maintains an easy to use, modular, free and open source python framework for short-term ensemble prediction systems.

The focus is on **probabilistic nowcasting of radar precipitation fields**, but pySTEPS is designed to allow a wider range of uses.

## Quick-start guide
It is very easy to start using pySTEPS! You need to follow these steps:  <br/>
A. If not already available, install **Anaconda** to manage all the necessary installations.  <br/>
B. Install the dependencies with Anaconda.  <br/>
C. Download (clone) the pySTEPS repositories to your computer/server. <br/>

Important: pySTEPS currently uses **Python 2.7**. In the future we will consider migrating to Python 3. <br/>
Here we will explain how to set up pySTEPS in a linux environment.


### A. Installing Anaconda
It is strongly advised to install the last version of **Anaconda 3** (hence the Python 3.6 version on the download page) for optimal management of the libraries needed in pySTEPS. <br/> 
You proceed as follows: <br/>
1. Download the appropriate Anaconda for your platform: [https://www.anaconda.com/download/](https://www.anaconda.com/download/) <br/>
2. Follow the instructions to install Anaconda. For example you can execute the downloaded file as follows:
```
chmod +x Anaconda3-5.2.0-Linux-x86_64.sh
./Anaconda3-5.2.0-Linux-x86_64.sh
```
3. Use ```conda update conda``` to update Anaconda.
4. Create a Python 2.7 virtual environment with Anaconda: <br/> 
```conda create -n <yourenvname> python=2.7 anaconda``` <br/>
5. Activate the virtual environment: <br/> 
```source activate <yourenvname>``` <br/>

It may happen that the command conda is not yet visible. You can either source your .bashrc file or simply log out and log in again.

### B. Installing dependencies  
Depending on your Anaconda distribution, some of the dependencies may already be included in your environment. We have found that most commonly there are only few remaining packages that need to be manually installed. Use the below commands to install them:
```
conda install git
conda install opencv
conda install pillow
conda install pyproj
```
Please note that the *opencv* and *pillow* libraries correspond to the *cv2* and *PIL* python modules, respectively.

If you find any other missing library when trying to run pySTEPS, simply install it with: <br/> 
```conda install <packagename>```

For additional information on how to manage a conda virtual environments see [Conda](https://uoa-eresearch.github.io/eresearch-cookbook/recipe/2014/11/20/conda/).

You may want to use the ```configuration.yml``` file in the repo to create the conda virtual environment and install dependencies in one step by simply typing: <br/>
```conda create -n <yourenvname> -f configuration.yml``` <br/>

### C. Downloading the pySTEPS repositories
To download the github repositories containing the pySTEPS modules proceed as follows:
1. Create a "pySTEPS" directory in your home folder or server
```
mkdir pySTEPS
cd pySTEPS
```
2. Download the set of pySTEPS modules as follows: <br/>
```bash
pySTEPS_URL=https://github.com/pySTEPS
git clone $pySTEPS_URL/tutorials
git clone $pySTEPS_URL/motion
git clone $pySTEPS_URL/timeseries
git clone $pySTEPS_URL/perturbation
git clone $pySTEPS_URL/stepsnwc
git clone $pySTEPS_URL/verification
git clone $pySTEPS_URL/visualization
git clone $pySTEPS_URL/iotools
git clone $pySTEPS_URL/datatools
```
Note that each github repository contains a single pySTEPS module. <br/>

## pySTEPS tutorials
If all the needed dependencies are properly installed, you should be able to run the pySTEPS tutorials. <br/>
Note that you need to clone all the pySTEPS modules above to run the tutorials. <br/>
Theses are the available tutorials included in pySTEPS:
1. tutorials/tutorial1_motion.py
2. tutorials/tutorial2_cascade.py
3. tutorials/tutorial3_noisegenerator.py
4. tutorials/tutorial4_stochasticextrapolation.py

The tutorials are designed to be as self-explanatory as possible and to guide you through the basic functionalities of pySTEPS. To run the tutorials, follow the instructions below.

### 1. Download the input data
The data set containing four case studies for the tutorials can be downloaded from one of these sources:
1. [Dropbox](https://www.dropbox.com/s/sowzh1kh02lu1fr/archive.zip?dl=0)
2. [GoogleDrive](https://drive.google.com/open?id=1LytJ5b0PcBHE3zWS5CHJm1_QeWGZxZwd)

Once downloaded, unzip the archive.zip file into a local folder on your machine. At the end of this step, you should obtain a folder containing two subfolders named *mch* and *fmi*. 

Subfolders *mch* and *fmi* contain each two precipitation events. Each precipitation event includes a sequence of 40 radar precipitation fields.

### 2. Run the tutorial
Navigate to the tutorials module directory and open the file *data_paths.py*.
**Set the variable *path_inputs* to the directory where you have downloaded your radar data** (it is the directory containing the *mch* and *fmi* subfolders). In that file you can also set the variable *path_outputs* where to write the pySTEPS output (figures, plots, forecasts, etc).

Finally, to run the first tutorial script simply use: ```python tutorial1_motion.py```

## Getting in touch

## Announcements

### ERAD2018 short-course (1 July 2018, Ede-Wageningen, NL)

[ERAD short-course 4](https://www.erad2018.nl/short-courses/)


