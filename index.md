[logo]: https://avatars3.githubusercontent.com/u/40021569?s=200&v=4
![alt text][logo]

The pySTEPS initiative  is a community that develops and maintains an easy to use, modular, free and open source python framework for short-term ensemble prediction systems.

The focus is on **probabilistic nowcasting of radar precipitation fields**, but pySTEPS is designed to allow a wider range of uses.

## Announcements

### Release of pysteps

A first release of *pysteps* is planned for **10 August 2018**. 

The code is being reorganized in [one single repository](https://github.com/pySTEPS/pysteps). At the moment the old version of *pysteps* is still available on GitHub and corresponds to the code that was used during the ERAD2018 workshop. Very soon the old repositories will be deleted and only the new version maintained.

### ERAD2018 short-course

Our first workshop using *pysteps* took place during ERAD2018 in Ede-Wageningen, NL, on 1 July 2018. With over 30 participants, this was a very successful workshop! We would like to thank all the participants for their enthusiasm and commitment! 

The short-course description and material are available on the [ERAD2018 website](https://www.erad2018.nl/short-courses/) (search for short-course 4: *Radar-based Ensemble Precipitation Nowcasting*).

## Quick-start guide
It is very easy to start using *pysteps*! You simply need to install the dependencies with **Anaconda**, download (clone) the main *pysteps* repository and install it.

Important: *pysteps* is actively developed using **Python 3.6**.

Here we will explain how to set up pySTEPS in a **linux environment**. 
We plan to include detailed instructions for Windows and MacOS users, too. 

It is strongly advised to install the last version of **Anaconda 3** (hence the Python 3.6 version on the download page) for optimal management of the libraries needed in *pysteps*. 

Download the appropriate Anaconda for your platform: [https://www.anaconda.com/download/](https://www.anaconda.com/download/) 

Follow the instructions to install Anaconda. For example you can execute the downloaded file as follows:
```   
chmod +x Anaconda3-5.2.0-Linux-x86_64.sh
./Anaconda3-5.2.0-Linux-x86_64.sh
```   

Use ```conda update conda``` to update Anaconda.

Create a *pysteps* environment using the available [environment.yml file](https://github.com/pySTEPS/pysteps/blob/master/environment.yml) to install all the necessary dependencies:
```
conda env create -f environment.yml
```   
     
Activate the virtual environment:
```   
source activate pysteps
```   

To install *pysteps* from its source, download the github repository containing the *pysteps* source code use the following command:
```
git clone https://github.com/pySTEPS/pysteps
```

To install using pip run:
```
pip install ./pysteps
```

Or, to install it using setup.py run (global installation):
```
python setup.py install
```

For [user installation](https://docs.python.org/2/install/#alternate-installation-the-user-scheme):
```
python setup.py install --user
```

If you want to install the package in a specific directory run:
    
```
python setup.py install --prefix=/path/to/local/dir
```

IMPORTANT: All the dependencies need to be already installed! 

## Documentation

The documentation is available at this [link](https://pysteps.github.io/pysteps/refmanual/).

The same is also available as pdf [here](https://github.com/pySTEPS/pysteps/tree/gh-pages/refmanual/refmanual.pdf).
